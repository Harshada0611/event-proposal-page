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

//Route 2 : get all the proposals of a particular vendor(only for vendor and login required)
router.get('/',fetchVendor ,async(req, res)=>{
    try {
        const proposal = await Proposal.find({vendor: req.body.vendor})
        return res.status(200).json({
            status: 'success',
            proposal
        })
    } catch(e) {
        return res.status(500).json({
            status: "Failed",
            message:e.message
        })
    }

})

//Route 3 : Getting all the proposals (only for users and login required)
router.get('/all', fetchUser , async(req, res)=>{
    //to add serach bar in page 14
    const {search, attribute} = req.query;
    try{
        let proposals;
        if(search){
            proposals = await Proposal.find({[attribute]:{$regex: search, $options:'-i'}});
        }else{
            proposals = await Proposal.find();
        }
        res.status(200).json({
            status: 'success',
            proposals
        })
    } catch(e) {
        return res.status(500).json({
            status: "Failed",
            message:e.message
        })
    }
} )

//Route 4 ; to delete a proposal (only vendor can access)
router.delete('/:_id',fetchVendor ,async(req, res)=>{
    const {_id} = req.params;
    try{
        const proposal = await Proposal.findOne({_id});
        if(proposal.vendor.toString() !== req.body.vendor){
            return res.status(401).json({
                status:'failure',
                message: "you can't delete others proposals"
            })
        }
        const resp = await Proposal.deleteOne({_id});
        return res.status(200).json({
            status: 'success',
            message: 'proposal deleted successfully',
            resp
        })
    } catch(e) {
        return res.status(500).json({
            status: "Failed",
            message:e.message
        })
    }
})

//Route 5 : to update a proposal (only vendor can access)

router.put('/:_id', fetchVendor,async(req, res)=>{
    const {_id} = req.params;
    try{
        const proposal = await Proposal.findOne({_id});
        if(proposal.vendor.toString() !== req.body.vendor){
            return res.status(401).json({
                status:'failure',
                message: "you can't edit others proposals"
            })
        }
        const resp = await Proposal.updateOne({_id}, {$set: req.body});
        return res.status(200).json({
            status: 'success',
            message: 'proposal updated successfully',
            resp
        })

    }catch(e) {
        return res.status(500).json({
            status: "Failed",
            message:e.message
        })
    }
})

module.exports = router;