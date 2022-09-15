const Task = require('../models/Task')

const getAllTask = async (req,res) =>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks:tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getTask = async (req,res) =>{
    try {
        const {id:TaskID} = req.params
        const task  = await Task.findOne({_id:TaskID})
        if(!task) {
            return res.status(404).json({msg: `No task id with ${TaskID}`})
        }
        res.status(200).json({task:task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createTask = async (req,res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}
const updateTask = (req,res) =>{
    res.send({id:req.params.id})
}

const deleteTask = async (req,res) =>{
    try {
        const {id:TaskID} = req.params
        const task = await Task.findOneAndDelete({_id:TaskID})
        if(!task){
            res.status(404).json({msg: `No task id with ${TaskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllTask,
    getTask,
    createTask,
    updateTask,
    deleteTask
}