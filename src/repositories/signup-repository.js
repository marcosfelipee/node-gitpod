const User = require('../app/models/user');
const mongoose = require('mongoose');

//Register
exports.userRegister = async(data) =>{
    const usuario = await User.findOne({email: data.email});
    console.log(usuario);
    if (usuario){
        return null;
    }
    const newUser = new User();
    newUser.email = data.email;
    newUser.password = newUser.generateHash(data.password)
    newUser.save();
    
    return newUser;
}

//Login
exports.userLogin = async(data) =>{
    const user = await User.findOne({email: data.email});
    
    if (!user) {
        return null;
    }

    if (!user.ValidPassword(data.password)) {
        return null;
    }

    return user;
}