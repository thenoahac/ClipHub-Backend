const express = require('express');
const Customer = require('../../models/Customer');
const router = express.Router();
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// find all customers
router.get('/', (req, res) => {


    Customer.findAll()
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            console.log(err)
            res.status(500).json({ err, msg: 'error occured' })
        })

})

// create a customer
router.post('/', (req, res) => {
    Customer.create(req.body).then(newCustomer => {
        const token = jwt.sign({
            id: newCustomer.id,
            email: newCustomer.email,
        }, process.env.JWT_SECRET, {
            expiresIn: "2h"
        })
        return res.json({
            token: token,
            customer: newCustomer
        })
    }).catch(err => {
        res.status(500).json({ msg: 'an error has occurred!', err })
    })
})






// router.post('/', async (req,res) => {
//     // if(!req.session.loggedIn){
//     //     res.status(403).json({msg:"must login first!"})
//     // }
//     try {
//         const newCustomer = await Customer.create({
//             ...req.body,
//         });
//         const token = jwt.sign({
//             id: 
//         })
//         res.status(200).json(newCustomer);
//     }   catch (err) {
//         res.status(400).json(err);
//     }
// });

//find one customer
router.get("/:id", (req, res) => {
    // if(!req.session.loggedIn){
    //     res.status(403).json({msg:"must login first!"})
    // }
    Customer.findOne({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "this man does not exist", err })
    })
})

router.delete('/:id', (req, res) => {
    Customer.destroy({
        where: {
            id: req.params.id
        }
    })
        .then((delCustomer) => {
            if (!delCustomer) {
                res.status(404).json({ msg: 'No customer found with that ID!' })
            }
            res.status(200).json(delCustomer)
        })
})


// router.put('/', (req, res) => {
//     Customer.update (req.body, {
//         where: { id: req.params.id },
//     }).then(data => {
//         const token = jwt.sign({
//             id: data.id,
//             email: data.email
//         }, process.env.JWT_SECRET, {
//             expiresIn: '2h'
//         })

//         return res.json({
//             token: token,
//             data: data
//         })
//     }).catch(err => {
//         res.status(500).json({ msg: "Sheesh it ain't work", err})
//     })
// })
// edit profile
router.put("/", (req, res) => {
	const token = req.headers?.authorization?.split(" ").pop();
	jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
		if (err) {
			console.log(err);
			res.status(403).json({ msg: "Not logged in", err });
		} else {
			Customer.update(req.body, {
				where: { id: data.id },
				returning: true,
				plain: true
			})
				.then(info => {
					const token = jwt.sign(
						{
							id: info.id,
							email: info.email
						},
						process.env.JWT_SECRET,
						{
							expiresIn: "2h"
						}
					);

					return res.json({
						token: token,
						data: data
					});
				})
				.catch(err => {
					res.status(500).json({ msg: "sheesh, it ain't work", err });
				});
		}
	});
});


//log in
router.post('/login', (req, res) => {
    Customer.findOne({
        where: {
            email: req.body.email
        }
    }).then(customerData => {
        if (!customerData) {
            return res.status(400).json({ message: 'Invalid login credentials!' });
        }

        if (!bcrypt.compareSync(req.body.password, customerData.password)) {
            return res.status(400).json({ message: 'Invalid login credentials!' });
        }
        else {
            const token = jwt.sign({
                id: customerData.id,
                email: customerData.email
            }, process.env.JWT_SECRET, {
                expiresIn: '2h'
            })
            return res.json({
                token: token,
                customer: customerData
            })
        }


    }).catch(err => {
        res.status(500).json({ msg: 'an error has occurred!' })
    })
});


//log out
// router.post('/logout', (req, res) => {
//     if (req.session.loggedIn) {
//         req.session.destroy(() => {
//             req.status(404).end();
//         });
//     } else {
//         res.status(404).end();
//     }
// });

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(200).json({ msg: 'logged out!' });
        });
    } else {
        res.status(401).json({ msg: "you must be logged in!" });
    }
});

// module.exports
module.exports = router;
