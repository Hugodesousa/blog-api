const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'blog_post',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {foreignKey: 'id', as: 'users'})
  };

  return BlogPost;
};

module.exports = BlogPost;

// id
// title
// content
// userid
// published DataT
// upadated Data