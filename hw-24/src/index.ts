import express, {Express} from "express";
import cors from "cors";

import messagesRouter from "./routers/messages.router";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/messages", messagesRouter);

app.listen(3000, () => console.log("Port running on 3000 port"));


