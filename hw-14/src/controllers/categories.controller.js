import * as categoriesService from "../services/categories.service.js"

export const addCategoryController = async (req, res) => {
    const result = await categoriesService.addCategory(req.body);

    res.status(201).json(result);
};