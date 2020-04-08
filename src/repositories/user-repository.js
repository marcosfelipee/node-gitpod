const User = require('../app/models/user');
const mongoose = require('mongoose');

exports.get = async () => {
    const res = await User.find();
    return res;
}

exports.getById = async (id) => {
    const res = await User.findById(id);
    return res;
}

exports.post = async(data) =>{
    const product = new User(data);
    await product.save();
}

exports.put = async(id, data) =>{
    await User.findByIdAndUpdate(id, {
        $set:{
            nome: data.nome,
            email: data.email,
            password:data.password
        }
    });
}

exports.delete = async(id) =>{
    await User.findOneAndRemove(id);
}
