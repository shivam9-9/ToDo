const Todo = require("../models/Todo");

exports.createTodo= async(req,res)=>{
    try{
        //extract title and description from req body i.e. data we are inserting as entry in fronted i.e webpage
        const {title,description} = req.body;
        // crerate a new todo obj and insert in db
        const response= await Todo.create({title,description});

        //send a json res with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'entry created successfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message: err.message,
        })
    }
}




