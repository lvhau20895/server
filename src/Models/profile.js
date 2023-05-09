const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return profile.init(sequelize, DataTypes);
}

class profile extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    profile_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    vip: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    coin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'profile',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "profile_id" },
        ]
      },
    ]
  });
  }
}
