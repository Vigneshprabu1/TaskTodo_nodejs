/**
 * Designed By:Vigneshprabu S
 * date:27-06-2020
 * modified:-
 * File Name: TodoList Service
 */

const mongoose = require("mongoose");
const TodoList = require("../model/TodoList");
const dateTime = require("node-datetime");


async function getAllTodoList(req, res) {
  var result;
  await TodoList.find().then((doc) => {
    result = doc;
  });
  return result;
}

async function saveTodoList(req, res) {
  var result;
  const dt = dateTime.create();
  const formatted = dt.format("Y-m-d H:M:S");
  const todoList = new TodoList({
    _id: new mongoose.Types.ObjectId(),
    taskName: req.body.taskName,
    description: req.body.description,
    status: req.body.status,
    createdBy: req.body.user,
    createdOn: formatted,
  });
  await todoList.save().then(doc=>{
      result = doc;
  });
  return result;
}

async function updateTodoList(req,res){
  var result; 
  const dt = dateTime.create();
  const formatted = dt.format("Y-m-d H:M:S");
  await TodoList.findByIdAndUpdate({_id:req.body._id},{
      $set:{
        taskName: req.body.taskName,
        description: req.body.description,
        status: req.body.status,
        modifiedBy: req.body.user,
        modifiedOn: formatted,
      }
  }).exec().then(doc=>{
      result = doc;
  });
  return result;
}

async function statusupdateTodoList(req,res){
    var result; 
    const dt = dateTime.create();
    const formatted = dt.format("Y-m-d H:M:S");
    await TodoList.findByIdAndUpdate({_id:req.body._id},{
        $set:{
          status: req.body.status,
          modifiedBy: req.body.user,
          modifiedOn: formatted,
        }
    }).exec().then(doc=>{
        result = doc;
    });
    return result;
  }


async function deleteTodoList(query){
    return await TodoList.findByIdAndDelete(query).exec();
}

module.exports.saveTodoList = saveTodoList;
module.exports.getAllTodoList = getAllTodoList;
module.exports.updateTodoList = updateTodoList;
module.exports.statusupdateTodoList = statusupdateTodoList;
module.exports.deleteTodoList = deleteTodoList;
