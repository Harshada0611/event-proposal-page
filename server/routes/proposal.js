const router = require('express').Router();
const Proposal = require('../model/Proposal');
const vendorAuthMiddleware = require('../middleware/vendorAuth')


router.post("/", async(req,res) => {
    try{
        console.log(req.body);
        const proposal = await Proposal.create(req.body);
        
        res.status(201).json({
            status:"Success",
            proposal
        })
    } catch(e) {
        res.status(500).json({
            status: "Failed",
            message:e.message
        })
        console.log(e.message)
    }
});



module.exports = router;