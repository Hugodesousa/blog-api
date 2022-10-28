const { categoryService } = require('../service');

const newCategory = async (req, res) => {
const result = await categoryService.createCategory(req.body);

return res.status(201).json(result);
};

const getAllCategories = async (_req, res) => {
const result = await categoryService.getAll();
return res.status(200).json(result);
};

module.exports = {
  newCategory,
  getAllCategories,
};
