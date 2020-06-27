/**
 * Designed By:Vigneshprabu S
 * date:27-06-2020
 * modified:-
 * File Name: Login Controller
 */

const LoginService = require('../service/LoginService');


exports.login = (req,res,next)=>{    
    LoginService.login(req,res);
}

exports.checkSession= (req,res,next) =>{
    LoginService.checkSession(req,res)
    .then(session=>{
        res.status(200).json(session)
    }).catch(next);
 }

 exports.getAllUser = (req,res,next) =>{
    LoginService.getAllUser(req,res).then(doc=>{
        res.status(200).json(doc)
    }).catch(next);
}
exports.saveUser = (req,res,next) =>{
    LoginService.saveUser(req,res).then(doc=>{
        res.status(200).json(doc);
    }).catch(next);
}
exports.updateUser = (req,res,next) =>{
    LoginService.updateUser(req,res).then(doc=>{
        res.status(200).json(doc);
    }).catch(next);
}