const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return likes.init(sequelize, DataTypes);
}

class likes extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'messages',
        key: 'message_id'
      }
    }
  }, {
    sequelize,
    tableName: 'likes',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "message_id" },
        ]
      },
      {
        name: "message_id",
        using: "BTREE",
        fields: [
          { name: "message_id" },
        ]
      },
    ]
  });
  }
}
