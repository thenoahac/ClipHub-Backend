// const express = require('express');
// const Barber = require('../../models/Barber');
// const router = express.Router();
// // const { barber } = require('../models/Barber')
// const app = express();
// const bcrypt = require('bcrypt');

// // // find all barbers
// router.get("/", (req, res) => {
//     Barber.findAll({
//     }).then(Barber => {
//         res.json(Barber)
//     }).catch(err => {
//         res.status(500).json({ msg: "error", err })
//     })
// })
// // create a barber
// router.post('/', async (req, res) => {
//     try {
//         const newBarber = await Barber.create({
//             ...req.body,
//         });

//         res.status(200).json(newBarber);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });
// //find one barber
// router.get("/:id", (req, res) => {
//     // if(!req.session.loggedIn){
//     //     res.status(403).json({msg:"must login first!"})
//     // }
//     Barber.findOne({
//         where: {
//             id: req.params.id
//         }
//     }).then(data => {
//         res.json(data)
//     }).catch(err => {
//         res.status(500).json({ msg: "this man does not exist", err })
//     })
// })
// //delete a barber
// router.delete('/:id', async (req, res) => {
//     // if(!req.session.loggedIn){
//     //     res.status(403).json({msg:"must login first!"})
//     // }
//     try {
//         const barberData = await Barber.destroy({
//             where: {
//                 id: req.params.id,
//                 // barberId: req.session.id,
//             },
//         });

//         if (!barberData) {
//             res.status(404).json({ message: "No barber found with this id" })
//             return;
//         }

//         res.status(200).json(barberData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
// // edit profile
// // router.put('/:id', (req, res) => {
// //     Barber.update({
// //         barber_name: req.body.barber_name,
// //         bio: req.body.bio,
// //         barber_password: req.body.barber_password,
// //         barber_phone_number: req.body.barber_phone_number
// //     }).then(data => {
// //         res.json(data)
// //     }).catch(err => {
// //         res.status(500).json({ msg: "sheesh, it ain't work", err })
// //     })
// // })
// router.put('/:id', (req, res) => {
//     Barber.update({
//         name: req.body.username,
//         bio: req.body.bio,
//         password: req.body.password,
//         phone: req.body.phone
//     }).then(data => {
//         res.json(data)
//     }).catch(err => {
//         res.status(500).json({ msg: "error", err })
//     })
// })

// //log in
// // router.post('/login', async (req, res) => {
// //     try {
// //         const barberData = await Barber.findOne({ where: { email: req.body.email } });

// //         if (!barberData) {
// //             console.log(barberData)
// //             res.status(400).json({ message: "Incorrect login info, try again" });
// //             return;
// //         }



// //         if (!bcrypt.compareSync(req.body.password, barberData.password)) {
// //             res.status(401).json({ msg: "incorrect login info, try again!" });
// //             return
// //         }


// // req.session.save(() => {
// //     req.session.id = barberData.id;
// //     req.session.loggedIn = true;

// //     res.json({ barber: barberData, message: "You are now logged in!" });
// // });
// //     } catch (err) {
// //         res.status(400).json(err);
// //     }
// // });
// router.post("/login", (req, res) => [
//     Barber.findOne({
//         where: {
//             email: req.body.email
//         }
//     }).then(foundBarber => {
//         console.log(foundBarber)
//         if (!foundBarber) {
//             return res.status(401).json({ msg: "invalid login credentials!" })
//         }
//         if (!bcrypt.compareSync(req.body.password, foundBarber.password)) {
//             return res.status(401).json({ msg: "invalid login credentials!" })
//         }
//         req.session.save(() => {
//             req.session.id = foundBarber.id;
//             req.session.loggedIn = true;

//             res.json({ barber: foundBarber, message: "You are now logged in!" });
//         });

//     }).catch(err => {
//         console.log(err)
//         res.status(500).json({ msg: "an error occurred", err })
//     })
// ])

// //log out
// router.post('/logout', (req, res) => {
//     if (req.session.loggedIn) {
//         req.session.destroy(() => {
//             res.status(200).json({msg: 'logged out!'});
//         });
//     } else {
//         res.status(401).json({msg: "you must be logged in!"});
//     }
// });

// //signUp
// // router.post('/signUp', async (req, res) => {
// //     try {
// //         const barberData = await Barber.create(req.body);
// //         req.session.save(() => {
// //             req.session.barber_id = barberData.id;
// //             req.session.loggedIn = true;
// //             console.log('sign up ID');
// //             console.log(barberData.id);
// //             console.log('~~~');
// //             console.log(req.session.user);
// //             // const jsonUser= userData.toJSON();

// //             res.redirect('/profile');
// //         });
// //         // res.status(200).json(userData)
// //     } catch (err) {
// //         res.status(400).json(err);
// //     }
// // });

// module.exports = router;