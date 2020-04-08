const Produto = require('../app/models/product');
const mongoose = require('mongoose');

exports.get = async () => {
    const res = await Produto.find();
    return res;
}

exports.getById = async (id) => {
    const res = await Produto.findById(id);
    return res;
}

exports.post = async(data) =>{
    const product = new Produto(data);
    await product.save();
}

exports.put = async(id, data) =>{
    await Produto.findByIdAndUpdate(id, {
        $set:{
            nome: data.nome,
            preco: data.preco,
            descricao:data.descricao
        }
    });
}

exports.delete = async(id) =>{
    await Produto.findOneAndRemove(id);
}
