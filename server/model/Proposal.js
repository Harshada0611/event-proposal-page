const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const proposalSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    place : {
        type:String,
        enum : ["Bangalore", "Mumbai", "Pune", "Delhi", "Kochi", "Hyderabad"]
    },
    proposalType : {
        type:String,
        enum:["Venue", "Food", "Events"],
        default: "Venue"
    },
    eventype : {
        type:String,
        enum: ["Birthday", "Engagement", "Wedding", "Casual", "Awareness Campaigns"],
    },
    budget : {
        type : Number,
        min: 10000,
        required: true
    },
    from : {
        type: Schema.Types.Date 
    },
    to : {
        type: Schema.Types.Date 
    },
    description : {
        type: String,
        required: true 
    },
    images : {
        type: Array,
        required: true
    },
    foodPreference : {
        type: String,
        required: true 
    },
    events : {
        type: String,
        required: true 
    },
    vendor : {
        type: Schema.Types.ObjectId,
        ref : "vendors"
    }
}, {timestamps:true});

const Proposal = mongoose.model('proposals',proposalSchema);
module.exports = Proposal;

