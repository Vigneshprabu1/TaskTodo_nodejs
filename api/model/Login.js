const mongoose =   require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
const bcrypt = require('bcryptjs');

const loginSchema = mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    userName: String,
    // emailId:String,
    password:String,
    status:String,
    createdBy: String,
    createdOn: String,
    modifiedBy: String,
    modifiedOn: String,
}, {
    timestamps: true
});

loginSchema.statics.hashPassword = function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

loginSchema.methods.isValid = function (hashedPassword) {
    return bcrypt.compareSync(hashedPassword, this.password);
}

loginSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });
module.exports = mongoose.model('Login', loginSchema);