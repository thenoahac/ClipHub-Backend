// const router = require('express').Router();
// const { service, barber, customer, appointment } = require('../../models/Image');

// // Get API/service
// router.get('/', (req, res) => {
//     Service.findAll({
//         attributes: ['id', 'service_name', 'price', 'time'],
//         include: [
//             {
//                 model: barber,
//                 attributes: ['']
//             }
//         ],
//         include: [
//             {
//                 model: appointment,
//                 attributes: ['appointment_date', 'appointment_date_end', 'appointment_time', 'appointment_time_end',],
//                 include: {
//                     model: Customer,
//                     attributes: ['id', 'name']
//                 }
//             }
//         ]
//     })
//         .then(dbBarberData => res.json(dbBarberData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// // Get API/service
// router.get('/:id', (req, res) => {
//     Service.findOne({
//         where: {
//             id: req.params.id
//         },
//         attributes: ['id', 'service_name', 'price', 'time'],
//         include: [
//             {
//                 model: barber,
//                 attributes: [''],
//             },
//                 {
//                     model: appointment,
//                     attributes: ['appointment_date', 'appointment_date_end', 'appointment_time', 'appointment_time_end',],
//                     include: {
//                         model: Customer,
//                         attributes: ['id', 'name']
//                     }
//                 }
//         ]
//     })
//     .then(dbBarberData => {
//         if(!dbBarberData) {
//             res.status(404).json({message: "No barber found with that ID" });
//             return;
//         }
//         res.json(dbBarberData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// // Post API/service
// router.post('/', (req, res) => {
//     Service.create({
//         service_name: req.body.service_name,
//         price: req.body.price,
//         time: req.body.time,
//         barber_id: req.body.barber_id
//     })
//     .then(dbBarberData => res.json(dbBarberData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// // Put API/service
// router.put('/:id', (req, res) => {
//     Service.update(req.body, {
//         individualHooks: true,
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(dbBarberData => {
//         if(!dbBarberData[0]) {
//             res.status(404).json({message: "No Barber found with that ID"});
//             return;
//         }
//         res.json(dbBarberData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         })
// });

// // Delete API/service
// router.delete('/:id', (req, res) => {
//     Service.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(dbBarberData => {
//         if(!dbBarberData) {
//             res.status(404).json({message: "No service with that id found"});
//             return;
//         }
//         res.json(dbBarberData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// });


// module.exports = router;