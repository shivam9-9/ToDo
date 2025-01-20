const Todo = require("../models/Todo");

exports.updateTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        const {title,description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt: Date.now()},
        )

        res.status(200).json({
            success:true,
            data:todo,
            message:"todo is updated successfull",
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