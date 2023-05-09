const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return rooms.init(sequelize, DataTypes);
}

class rooms extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    room_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rooms',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "room_id" },
        ]
      },
    ]
  });
  }
}
