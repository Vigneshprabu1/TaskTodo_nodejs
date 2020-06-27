/**
 * Designed By:Vigneshprabu S
 * date:27-06-2020
 * modified:-
 * File Name: TodoList Model
 */

 const mongoose = require('mongoose');


 const todoListSchema = mongoose.Schema({
   _id: mongoose.Types.ObjectId,
   taskName: String,
   description:String,
   status: String,
   createdBy: String,
   createdOn: String,
   modifiedBy: String,
   modifiedOn: String,
 });

 module.exports = mongoose.model('TodoLists',todoListSchema);