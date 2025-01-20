const Todo = require("../models/Todo");

exports.deleteTodo = async(req,res)=>{
    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"todo is deleted successfull",
        })
    } catch(err) {
        console.error(err);
        res.status(400).json({
            success:false,
            message:"Server error occured while deleting the todo by id",
            error:err.message
        })
    }
}