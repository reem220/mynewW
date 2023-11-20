const express=require('express')
const Workout=require('../model/workoutmodel')
const { default: mongoose } = require('mongoose')
const router=express.Router()
const {
    getWorkout,
    getWorkouts,
    creatWorkout,
    updateWorkout,
    deletWorkout}=require('../controllers/workoutController')

router.get('/', getWorkouts)

router.get('/:id',getWorkout)
router.post('/',creatWorkout)

router.delete('/:id',deletWorkout)

router.patch('/:id',updateWorkout)
module.exports=router