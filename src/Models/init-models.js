const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../Configs/connect");
const _friends = require("./friends");
const _likes = require("./likes");
const _messages = require("./messages");
const _profile = require("./profile");
const _rooms = require("./rooms");
const _rooms_users = require("./rooms_users");
const _user_type = require("./user_type");
const _users = require("./users");

function initModels(sequelize) {
	const friends = _friends(sequelize, DataTypes);
	const likes = _likes(sequelize, DataTypes);
	const messages = _messages(sequelize, DataTypes);
	const profile = _profile(sequelize, DataTypes);
	const rooms = _rooms(sequelize, DataTypes);
	const rooms_users = _rooms_users(sequelize, DataTypes);
	const user_type = _user_type(sequelize, DataTypes);
	const users = _users(sequelize, DataTypes);

	messages.belongsToMany(users, {
		as: "user_id_users",
		through: likes,
		foreignKey: "message_id",
		otherKey: "user_id"
	});
	rooms.belongsToMany(users, {
		as: "user_id_users_rooms_users",
		through: rooms_users,
		foreignKey: "room_id",
		otherKey: "user_id"
	});
	users.belongsToMany(messages, {
		as: "message_id_messages",
		through: likes,
		foreignKey: "user_id",
		otherKey: "message_id"
	});
	users.belongsToMany(rooms, {
		as: "room_id_rooms",
		through: rooms_users,
		foreignKey: "user_id",
		otherKey: "room_id"
	});
	likes.belongsTo(messages, { as: "message", foreignKey: "message_id" });
	messages.hasMany(likes, { as: "likes", foreignKey: "message_id" });
	messages.belongsTo(rooms, { as: "room", foreignKey: "room_id" });
	rooms.hasMany(messages, { as: "messages", foreignKey: "room_id" });
	rooms_users.belongsTo(rooms, { as: "room", foreignKey: "room_id" });
	rooms.hasMany(rooms_users, { as: "rooms_users", foreignKey: "room_id" });
	users.belongsTo(user_type, { as: "type", foreignKey: "type_id" });
	user_type.hasMany(users, { as: "users", foreignKey: "type_id" });
	friends.belongsTo(users, { as: "user", foreignKey: "user_id" });
	users.hasMany(friends, { as: "friends", foreignKey: "user_id" });
	likes.belongsTo(users, { as: "user", foreignKey: "user_id" });
	users.hasMany(likes, { as: "likes", foreignKey: "user_id" });
	messages.belongsTo(users, { as: "user", foreignKey: "user_id" });
	users.hasMany(messages, { as: "messages", foreignKey: "user_id" });
	profile.belongsTo(users, { as: "profile", foreignKey: "profile_id" });
	users.hasOne(profile, { as: "profile", foreignKey: "profile_id" });
	rooms_users.belongsTo(users, { as: "user", foreignKey: "user_id" });
	users.hasMany(rooms_users, { as: "rooms_users", foreignKey: "user_id" });

	return {
		friends,
		likes,
		messages,
		profile,
		rooms,
		rooms_users,
		user_type,
		users
	};
}
module.exports = initModels(sequelize);
module.exports.initModels = initModels(sequelize);
module.exports.default = initModels(sequelize);
