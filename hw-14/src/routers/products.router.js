import { Router } from "express";

import { addProductController, getProductController } from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/", addProductController);
productsRouter.get("/", getProductController)

export default productsRouter;