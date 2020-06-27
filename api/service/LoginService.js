
/**
 * Designed By:Vigneshprabu S
 * date:27-06-2020
 * modified:-
 * File Name: Login Service
 */


const Login = require('../model/Login');
const jwt = require('jsonwebtoken');
/**  Import Module*/
const dateTime = require('node-datetime');
const mongoose = require('mongoose');

async function  login(req,res,next){
    var emailId = req.body.userName.toLowerCase();
    await Login.findOne({userName:emailId})
    .exec()
    .then(doc =>{
        if(doc){
            if(doc.isValid(req.body.password)){
                let token = jwt.sign(
                    {userName:doc.userName,userId:doc._id,login: 'user'},'secret', { expiresIn: '2h' }
                );
                res.status(200).json({
                    token:token,
                    user:doc,
                    login:'user'
                });
            } else {
                res.status(501).json({
                    message: 'Password is wrong ..!'
                });
            }
        } else {
            res.status(501).json({
                message: 'Email is not Registered ..!'
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
}

async function checkSession(req, res) {
    return User.find()
        .exec();
}

var decodedToken = '';
function verifyToken(req,res,next){
    var token;
    var customer;
    if (req.headers.authorization === '$2a$10$Wyoea0rF9XTocZd6y6ASdurgU9MZ8p3HuPI5XupJ3qkF5sjhP46UO') {
        customer = req.headers.authorization;
    } else {
        token = req.headers.authorization;
    }
    if (token) {
        jwt.verify(token, 'secret', function (err, tokendata) {
            if (err) {
                return res.status(400).json({ message: 'Unauthorized Request' })
            }
            if (tokendata) {
                if (tokendata.login === 'user') {
                    req.body.user = tokendata.userName;
                    req.body.userId = tokendata.userId;
                    decodedToken = tokendata;
                } else {
                    req.body.customerId = tokendata.customerId;
                    decodedToken = tokendata;
                }
                next();
            }
        });
    } else if (customer) {
        if (customer) {
            next();
        }

    } else {
        return res.status(400).json({ message: 'Unauthorized Request' })
    }
}
async function getAllUser(req,res,next){
    var result = Login.find().exec();
    return result;
}

async function saveUser(req,res,next){
    var result;
    const dt = dateTime.create();
    const formatted = dt.format('Y-m-d H:M:S');
    // req.body.userName = req.body.userName.trim()[0].toUpperCase() + req.body.userName.slice(1);
    const login = new Login({
        _id: new mongoose.Types.ObjectId(),
        userName: req.body.userName,
        password: Login.hashPassword(req.body.password),
        // emailId:req.body.emailId,
        status: req.body.status,
        createdBy: req.body.createdBy,
        createdOn: formatted,
    });

    await login.save().then(doc=>{
        result = doc;
    });
    return result;
}

async function updateUser(req,res,next){
    var result;
    const dt = dateTime.create();
    const formatted = dt.format('Y-m-d H:M:S');
    // req.body.userName = req.body.userName.trim()[0].toUpperCase() + req.body.userName.slice(1);
    await Login.findByIdAndUpdate(
      { _id: req.body._id },
      {
        $set: {
        //   userName: req.body.userName,
        //   password: User.hashPassword(req.body.password),
        //   email: req.body.email,
          status: req.body.status,
          modifiedBy: req.body.modifiedBy,
          modifiedOn: formatted,
        },
      }
    )
      .exec()
      .then((doc) => {
        result = doc;
      });
    return result;
}

module.exports.getAllUser = getAllUser;
module.exports.saveUser = saveUser;
module.exports.updateUser =  updateUser;
module.exports.login = login;
module.exports.checkSession = checkSession;
module.exports.verifyToken = verifyToken;