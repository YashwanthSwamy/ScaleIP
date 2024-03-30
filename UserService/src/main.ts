import bodyParser from "body-parser";
import cors from 'cors';
import express from "express";
import { loginRoutes } from "./routes/login";

const port = 8080;
const app = express();

function checkErrors(err: any, req: any, res: any, next: any) {
    if (err instanceof SyntaxError && err.message.indexOf("JSON")) {
        res.status(400).json({ errorCode: 100, Ref: "Error parsing JSON" });
    } else {
        res.status(400).json({ errorCode: 101, Ref: "Error parsing JSON" });
    }
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(checkErrors);
app.use(loginRoutes);

async function main() {
    // TODO: Initialise database for user information
    console.log("Server Started!!!")
    app.listen(port);
}

main();
export { app };