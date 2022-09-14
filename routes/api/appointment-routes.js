// const express = require('express');
// const router = express.Router();
// const { Appointment } = require('../../models')
// const app = express();
// // get all appointments
// router.get('/', (req, res) => {
//     Appointment.findAll().then((data) => {
//         res.json(data)
//     })
//         .catch((err) => {
//             res.status(400).json(err);
//         })
// })
// //create an appointment
// router.post('/', async (req, res) => {
//     Appointment.create({
//         ...req.body,
//     }).then(res.json({ msg: 'appointment scheduled!' }))
//         .catch(err => {
//             res.status(500)
//             console.log(err)
//         })
// })

// //get one appointment
// router.get("/:id", (req, res) => {
//     Appointment.findOne({
//         where: {
//             id: req.params.id
//         }
//     }).then(data => {
//         res.json(data)
//     }).catch(err => {
//         res.status(500).json({ msg: "this man does not exist", err })
//     })
// })

// router.delete('/:id', async (req, res) => {
//     try {
//         const appData = await Appointment.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });

//         if (!appData) {
//             res.status(404).json({ message: "No barber found with this id" })
//             return;
//         }

//         res.status(200).json(appData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;