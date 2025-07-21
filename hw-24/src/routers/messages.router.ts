import { Router } from "express";
import { getMessagesController, addtMessagesController } from "../controllers/messages.controller";

const messagesRouter: Router = Router();

messagesRouter.get("/", getMessagesController);

messagesRouter.post("/", addtMessagesController);

export default messagesRouter;