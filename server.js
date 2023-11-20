require('dotenv').config()
const express =require('express')
const workoutRoutes=require('./routes/workout')
const mongoose =require('mongoose')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api/workouts',workoutRoutes)
mongoose.connect(process.env.MONGO_URL).then(()=>{
    //const userSchema=new mongoose.Schema({name:String,age:Number})
   // const userModel=mongoose.model('user',userSchema)
   // app.get('/user',(req,res)=>{
        //userModel.find().then((u)=>{
          // res.json(u)
       // })
   // })
    app.listen(process.env.PORT,()=>{
        console.log('connected to db and listing for request on port',process.env.PORT)
    })
})
.catch((e)=>{
    console.log(e)
})