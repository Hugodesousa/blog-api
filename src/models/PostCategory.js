const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'post_category',
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'postId', 
      otherKey: 'categoryId', 
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',  
      otherKey: 'postId',
    });
  };

  return PostCategory;
};

module.exports = PostCategory;