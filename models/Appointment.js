const { Model, DataTypes, Sequelize, DATEONLY } = require('sequelize');
const { sequelize }= require('../config/connection');

class Appointment extends Model { }

Appointment.init(
    {
//         // id: {
//         //     type: DataTypes.INTEGER,
//         //     allowNull: false,
//         //     primaryKey: true,
//         //     autoIncrement: true
//         // },
//         // service_id: {
//         //     type: DataTypes.INTEGER,
//         //     references: {
//         //         model: 'Service',
//         //         key: 'id',
//         //     },
//         //     // autoIncrement: true
//         // },
//         customerId: {
//             type: DataTypes.STRING,
//             references: {
//                 model: 'Customer',
//                 key: 'id',
//                 unique: false
//             }
//         },
//         barberId: {
//             type: DataTypes.STRING,
//             references: {
//                 model: 'Barber',
//                 key: 'id',
//                 unique: false
//             }
//         },
        appointment_date: {
            type: DataTypes.DATE,
            allowNull: false,
          },
//         //   appointment_date_end: {
//         //     type: Date,
//         //     // allowNull: false,
//         //   },
//           appointment_time: {
//               type: Number,
//               // type: Date,
//               allowNull: false,
//           },
//           appointment_time_end: {
//             type: Number,
//         //     type: Date
//             // allowNull: false,
//           },
//           appointment_time: {
//               type: String,
//               allowNull: false,
//           },
//           appointment_time_end: {
//             type: String
//             // allowNull: false,
//         },

//     },
//     {
        sequelize,
    //     // timestamps: false,
    //     // freezeTableName: true,
    //     // underscored: true,
    //     // modelName: 'appointment'
    }
);

module.exports = Appointment;