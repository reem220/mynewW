const mongoose =require('mongoose')
const Workout=require('../model/workoutmodel')
const getWorkouts=async (req,res)=>{
    const work=await Workout.find().sort({createdAt:-1})
    res.status(200).json(work)
}
const getWorkout=async(req,res)=>{
    const { id } =req.params
if(! mongoose.Types.ObjectId.isValid(id)){
return res.status(404).json({error:'No such workout'})
}
const work=await Workout.findById(id)
if(! work){
return res.status(404).json({erroe:'No such workout -dont found id in table'})
}
res.status(200).json(work)
}
const creatWorkout=async (req,res)=>{
    const {title,load,reps}=req.body
    try{
        const work= await Workout.create({title,load,reps})
        //status:علامه توثيق ادا نجح او لا 
        res.status(200).json(work)
    }
catch(e){
    res.status(400).json({error:e.message})
}
}
const updateWorkout=async(req,res)=>{
    // res.json({mssg:'Update a workouts'})
    const { id } =req.params
    if(! mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No such workout'})
    }
    const work=await Workout.findOneAndUpdate({_id:id},{...req.body})
    if(! work){
    return res.status(404).json({erroe:'No such workout -dont found id in table'})
    }
    res.status(200).json(work)
 }
 const deletWorkout=async(req,res)=>{
    const { id } =req.params
    if(! mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No such workout'})
    }
    const work=await Workout.findOneAndDelete({_id:id})
    if(! work){
    return res.status(404).json({erroe:'No such workout -dont found id in table'})
    
    }
    res.status(200).json(work)
}
module.exports={
    getWorkout,
    getWorkouts,
    creatWorkout,
    updateWorkout,
    deletWorkout}




