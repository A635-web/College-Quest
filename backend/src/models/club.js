const mongoose=require("mongoose");

const clubSchema=new mongoose.Schema(
   
    {
        CoordinatorName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user', // Reference to the User model
            required: true
        },

        clubName:{
            type:String,
            required:true,
            trim:true,
        },
        recruitment: {
            type: Boolean,
            default: false,
            required:true,
        },
        upcomingEvent:{
            type:String,

        }
        
    }



)