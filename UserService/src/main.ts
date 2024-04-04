import bodyParser from "body-parser";
import cors from 'cors';
import express from "express";
import { loginRoutes } from "./routes/login";
import { signupRoutes } from "./routes/signup";
import { companiesRoutes } from "./routes/companies";
import { investmentsRoutes } from "./routes/investments";
import { environmentVariables } from "./configuration/environmentVariables";
import { TableInitializer } from "./externalServices/database/tables/intialization";

const port = environmentVariables.PORT;
const app = express();


function checkErrors(err: any, req: any, res: any, next: any) {
  if (err instanceof SyntaxError && err.message.indexOf("JSON")) {
    res.status(400).json({ errorCode: 100, Ref: "Error parsing JSON" });
  } else {
    res.status(400).json({ errorCode: 101, Ref: "Error parsing JSON" });
  }
}

// enablisg cross - origin reference for server
app.use(cors());

// enablisng parsing of API request 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// handle invaliade API requests 
app.use(checkErrors);

// Routes - API's
app.use(loginRoutes);
app.use(signupRoutes);
app.use(companiesRoutes);
app.use(investmentsRoutes);

async function main() {
  // Database Initialisation
  await TableInitializer.init()
    .then(async () => {
      console.log("Database up !!!");
    })
    .then(async () => {
      console.log("Application started on port " + port);
      // start the app
      app.listen(port);
    })
    .catch(async (error: any) => {
      console.error("Error setting up service", { error: error });
    });
}

main();
export { app };