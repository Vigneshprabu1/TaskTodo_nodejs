/**
 * Designed By:Vigneshprabu S
 * date:27-06-2020
 * modified:-
 * File Name: TodoList Router
 */

 const express = require('express');
 const router = express.Router();

 const TodoListContoller = require('../controller/TodoListController');
 const login = require('../service/LoginService');

 router.get('/',TodoListContoller.getAllTodoList);
 router.post('/',TodoListContoller.saveTodoList);
 router.patch('/',TodoListContoller.updateTodoList);
 router.patch('/status',TodoListContoller.statusupdateTodoList);
 router.put('/',TodoListContoller.deleteTodoList);
 router.post('/id',TodoListContoller.getListBaseOnLoginId);

 module.exports = router;