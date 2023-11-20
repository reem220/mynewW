const mongoose=require('mongoose')
const workoutSchema=new mongoose.Schema({
    title:{type:String,
    required:true},
    reps:{type:Number,
        required:true},
        load:{type:Number,
            required:true},
} ,{timestamps:true}  // timestamps:true=تعني انه يضيفلي وقت لما اضيف record 
 )
module.exports=mongoose.model('Workout',workoutSchema)