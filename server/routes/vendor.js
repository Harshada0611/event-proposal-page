const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const RegistrationModel = require('../model/registration')
const router = require('express').Router()



router.post('/registration', async (req, resp) => {

    try {
        const existingVendor = await RegistrationModel.findOne({ email: req.body.email })
        if (existingVendor) {
            return resp.status(200).send({ success: false, message: 'Vendor Credentials already exist' })
        }
        else {
            const password = req.body.password
            const saltRounds = 10
            const saltCode = await bcrypt.genSalt(saltRounds)
            const hashedPassword = await bcrypt.hash(password, saltCode)
            req.body.password = hashedPassword

            const newVendor = new RegistrationModel(req.body)
            const newVendorData = await newVendor.save()
            console.log(newVendorData)
            return resp.status(200).send({ success: true, message: 'Account Created Sucessfully' })
        }
    }
    catch (err) {
        console.log(err)
    }
})


router.post('/signin', async (req, resp) => {
    try {
        const vendor = await RegistrationModel.findOne({ contact: req.body.contact })
        if (vendor) {
            const matchPassword = await bcrypt.compare(req.body.password, vendor.password)
            if (matchPassword) {
                const dataToBeSentToFrontEnd = {
                    _id: vendor._id
                }
                //jwt.sign(payload, secretKey, expiryTime)
                const token = jwt.sign(dataToBeSentToFrontEnd, "secretKey", { expiresIn: '1d'})
                console.log(token)
                resp.status(200).json({ success: true, message: 'LogIn Successful', data: { token, name: vendor.name } })
            }
            else {
                resp.status(200).send({ success: false, message: 'Incorrect Password' })
            }
        }

        else {
            resp.status(200).send({ success: false, message: 'Vendor Not Registered' })
        }
    }
    catch (err) {
        resp.status(400).send(err)
    }
})


module.exports = router