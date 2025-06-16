import { Router } from "express";

import { getBooksController, addBookController, updateBookController, deleteBookController } from "../controller/books.controller.js";

const booksRouter = Router();

booksRouter.get("/", getBooksController);
booksRouter.post("/", addBookController);
booksRouter.put("/:id", updateBookController)
booksRouter.delete("/:id", deleteBookController)

export default booksRouter;