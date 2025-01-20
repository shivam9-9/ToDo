const Todo = require("../models/Todo");

exports.getTodo = async(req,res)=>{
    try{
        // fetch all todo from database
        const todos = await Todo.find({});

        res.status(200).json({
            success:true,
            data:todos,
            message:"entire todo list is fetched",
        })
    } catch(err) {
        console.error(err);
        res.status(400).json({
            success:false,
            message:"Server error occured while fetching the data",
            error:err.message
        })
    }
}

exports.getTodoById = async(req,res)=>{
    try{
        // fetch all todo from database
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        if(!todo){
            res.status(404).json({
                success:false,
                message:"no todo found",
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:"required todo is fetched",
        })
    } catch(err) {
        console.error(err);
        res.status(400).json({
            success:false,
            message:"Server error occured while fetching the todo by id",
            error:err.message
        })
    }
}

