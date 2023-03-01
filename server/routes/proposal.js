const router = require('express').Router();
const Proposal = require('../model/Proposal');
const fetchVendor = require('../middleware/vendorAuth');
const fetchUser = require('../middleware/fetchUser');
const upload = require('../middleware/uploadImages');

//ROUTE 1: Creating a new proposal;(only for vendor and login required)
router.post("/",fetchVendor, upload.single('image'), async(req,res) => {
    try{
        console.log(req.body);
        const proposal = await Proposal.create({
            ...req.body,
            images: [req.file.filename]
        });
        
        res.status(201).json({
            status:"Success",
            proposal
        })
    } catch(e) {
        res.status(500).json({
            status: "Failed",
            message:e.message
        })
    }
});

    

module.exports = router;