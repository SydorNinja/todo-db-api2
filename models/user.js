module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', /*1*/{
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [7, 100]
			}
		}
	},/*/1*/{
		hooks:{
			beforeValidate: function (user, options) {
				if (typeof user.email == 'string') {
					user.email = user.email.toLowerCase();
				}
			}
		}
	});
};