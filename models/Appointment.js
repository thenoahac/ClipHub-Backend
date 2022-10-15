const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../config/connection");

class Appointment extends Model {}

Appointment.init(
	{
		customerId: {
			type: DataTypes.INTEGER
		},
		appointment_date: {
			type: DataTypes.STRING,
			allowNull: false
		},
		appointment_time: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize
		// timestamps: false,
		// freezeTableName: true,
		// underscored: true,
		// modelName: 'appointment'
	}
);

module.exports = Appointment;