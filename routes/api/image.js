// const { cloudinary } = require('../../config/connection');
// const { Barber, Image} = require("../../models");


// const router = require('express').Router();

// router.get('/', async (req, res) => {
//     Image.findAll().then(dbResp => {
//         res.json(dbResp);
//     }).catch(err => {
//         console.log(err);
//         res.status(400).json({err: err});
//     })
// })

// router.get('/:BarberId', async (req, res) => {
//     const {BarberId} = req.params;

//     Image.findAll({
//         where: {
//             id: BarberId
//         }
//     }).then(imgRsp => {
//         Barber.findOne({
//             where: {
//                 id: BarberId
//             }
//         }).then(BarberResp => {
//             imgRsp.Barbername = BarberResp.name;
//             res.status(200).json(imgRsp);
//         }).catch(err => {
//             console.log(err);
//             res.status(404).json({err: "Error with Sequelize - Barber"});    
//         })
//     }).catch(err => {
//         console.log(err);
//         res.status(400).json({err: err});
//     })
// })

// // Adding an image to cloudinary and to the database
// router.post('/', async (req, res) => {
//     try {
//         const { data, name, u_id } = req.body;

//         const cloudResp = await cloudinary.uploader.upload(data, {
//             upload_preset: 'barber_photos'
//         }).catch(err=>{
//             console.log("ERROR")
//             console.log(err);
//         });

//         if (cloudResp?.url){
//             Image.create({
//                 name:name,
//                 u_id:u_id,
//                 url:cloudResp.url,
//                 secure_url: cloudResp.secure_url
//             }).then(imgRsp => {
//                 res.json({msg: "Successfully added"});
//             }).catch((err) => {
//                 console.log(err);
//                 res.status(404).json({err: "Error with Sequelize"});
//             })
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({err: "Cloudinary err"});
//     }
// })

// module.exports = router;