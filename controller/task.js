const Task= require('../models/task');
const asyncWrapper = require('../middleware/asyncWrapper');
const {createCustomError} = require('../error/custom-error');

const getAlltask = asyncWrapper(async (req,res)=>{
        const tasks = await Task.find({});
        res.status(201).json({tasks});
})

const createtask =  asyncWrapper(async(req,res,next)=>{
        const task =  await Task.create(req.body);
        res.status(201).json({task});
})
const gettask = asyncWrapper(async(req,res)=>{
        const TaskId = req.params.id;
        console.log(TaskId);
        const task = await Task.findOne({_id:TaskId});
        if(!task){
            return next(createCustomError("no task with id",404));
        }
        res.status(201).json({task});
    } 

    
)
const updatetask = asyncWrapper(async(req,res,next)=>{
        const id = req.params.id;
        const task = await Task.findByIdAndUpdate({_id:id},req.body,{
            new:true,
            runValidators:true, 
        });
        if(!task){
            return next(createCustomError("no task with id",404));
        }
        res.status(201).json({task});
    }
)
const deletetask = asyncWrapper(async(req,res,next)=>{
        const TaskId = req.params.id;
        const task = await  Task.findOneAndDelete({_id:TaskId});
        if(!task){
            return next(createCustomError("no task with id",404));
        }
        res.status(201).json({task,status:'success'});
    }
)

module.exports = {
    getAlltask,
    createtask,
    gettask,
    updatetask,
    deletetask,
}