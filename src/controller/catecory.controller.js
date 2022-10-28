const { categoryService } = require('../service');

const newCategory = async (req, res) => {
const result = await categoryService.createCategory(req.body);

return res.status(201).json(result);
};

module.exports = {
  newCategory,
};
