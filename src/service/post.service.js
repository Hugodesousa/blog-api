// const Sequelize = require('sequelize');
// const config = require('../config/config');
const { Category } = require('../models');

const { BlogPost, PostCategory } = require('../models');

const { readingToken } = require('../utils/jwt.util');
const { createError } = require('../utils/joiValidate.util');

// const { categoryService } = require('../service');

// const env = process.env.NODE_ENV || 'development';
// const sequelize = new Sequelize(config[env]);

const checkCategory = async (ids) => {
  // ids.map(async (element) => {
  //   const check = await Category.findByPk(element);
  //   // console.log(check);
  //   if (check === null) {
  //     return createError('one or more "categoryIds" not found', 400);
  //   }
  // });
  // return true;
  const find = ids.map((id) =>
    Category.findByPk(id));
  const result = await Promise.all(find);
  const checkResult = result.some((value) => value === null);
  console.log('---->', result, '---->', checkResult);
  if (checkResult) {
     return createError('one or more "categoryIds" not found', 400);
  }
  return true;
};

const createPost = async (newPost, token) => {
  const { title, content, categoryIds } = newPost;
  // const t = await sequelize.transaction();
   await checkCategory(categoryIds);
  // console.log(test);
  
  const userId = readingToken(token).id;

  const post = await BlogPost.create({ 
    title, 
    content, 
    userId, 
    published: new Date(), 
    updated: new Date() });
  const { id } = post.dataValues;
  categoryIds.forEach(async (element) => {
    await PostCategory.create({ 
      postId: id, 
      categoryId: element });
  });

  // try {
  //   const post = await BlogPost.create({ title, content, userId }, { transaction: t });
  //   const { id } = post.dataValues;
  //    categoryIds.forEach(async (element) => {
  //      await PostCategory.create({ postId: id, categoryId: element }, { transaction: t });
  //   });
  // } catch (error) {
  //   await t.rollback();

  //   throw error;
  // }
    
  const result = { id, ...post.dataValues, userId };
  return result;
};

module.exports = {
  createPost,
};