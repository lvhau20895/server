const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return messages.init(sequelize, DataTypes);
}

class messages extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    message_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    message_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    message_file: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    room_id: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'rooms',
        key: 'room_id'
      }
    }
  }, {
    sequelize,
    tableName: 'messages',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "message_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "room_id",
        using: "BTREE",
        fields: [
          { name: "room_id" },
        ]
      },
    ]
  });
  }
}
