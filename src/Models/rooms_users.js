const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return rooms_users.init(sequelize, DataTypes);
}

class rooms_users extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    room_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'rooms',
        key: 'room_id'
      }
    },
    user_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'rooms_users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "room_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
