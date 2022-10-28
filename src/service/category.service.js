const { Category } = require('../models');
const { createError } = require('../utils/joiValidate.util');

const createCategory = async (newCategory) => {
const { name } = newCategory;
if (!name) {
  createError('"name" is required', 400);
}
const categoryCreated = await Category.create({ name });
return categoryCreated;
};

const getAll = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = {
  createCategory,
  getAll,
};