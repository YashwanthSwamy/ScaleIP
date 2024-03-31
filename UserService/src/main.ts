import bodyParser from "body-parser";
import cors from 'cors';
import express from "express";
import { loginRoutes } from "./routes/login";
import { signupRoutes } from "./routes/signup";
import { environmentVariables } from "./configuration/environmentVariables";

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

async function main() {
    // TODO: Initialise database for user information
    console.log("Server Started!!!" + port)
    app.listen(port);
}

main();
export { app };