/**
 * Designed By:Vigneshprabu S
 * date:27-06-2020
 * modified:-
 * File Name: TodoList Controller
 */

 const TodoListService = require('../service/TodoListService');


 exports.getAllTodoList= (req,res,next)=>{
     TodoListService.getAllTodoList(req,res).then(doc=>{
         res.status(200).json(doc);
     }).catch(next);
 }

 exports.saveTodoList = (req,res,next) =>{
     TodoListService.saveTodoList(req,res).then(doc=>{
        res.status(200).json(doc);
     }).catch(next);
 }

 exports.updateTodoList = (req,res,next) =>{
     TodoListService.updateTodoList(req,res).then(doc=>{
         res.status(200).json(doc);
     }).catch(next);
 }
 exports.statusupdateTodoList = (req,res,next) =>{
    TodoListService.statusupdateTodoList(req,res).then(doc=>{
        res.status(200).json(doc);
    }).catch(next);
}
 exports.deleteTodoList = (req,res,next) =>{
    var query= {_id:req.body._id};
     TodoListService.deleteTodoList(query).then(doc=>{
         res.status(200).json(doc);
     })
 }