import { Router } from "express";
import { addProductController, getProductsController, getProductController, changeProductController, deleteProductController } from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/", addProductController);
productsRouter.get("/", getProductsController);
productsRouter.get("/:id", getProductController);
productsRouter.put("/:id", changeProductController);
productsRouter.delete("/:id", deleteProductController)

export default productsRouter;