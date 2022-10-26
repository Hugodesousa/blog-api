const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    },
    displayName:DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },{
    underscored: true,
    timestamps: false,
    tableName: 'users',
  });

  return User;
};

module.exports = User;