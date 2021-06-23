const todomodel = require("../models/todo");

module.exports = {
    create:(req,res,next) =>{
        console.log(req.body);
        todomodel.create({
             num: req.body.num,
             text: req.body.text,
             isfinished: false 
        },
        (err,result)=>{
            if(err)next(err)
            else {
                res.json({
                    status:"success",
                    body: result
                });
            }
        }
        )
        
    },
    getAll:(req,res,next) =>{
        res.json({
            status:"success"
        });
    },
    get:(req,res,next) =>{
        todomodel.findById(req.params.todoID,
       (err,result)=>{
           if(err)next(err)
           else {
               res.json({
                   status:"success",
                   body: result
               });
           }
       }
       )
    }
}