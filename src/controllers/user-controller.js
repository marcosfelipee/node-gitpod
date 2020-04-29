const User = require('../app/models/user');
const repository = require("../repositories/user-repository");

exports.getAll = async (req, res) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        })
    }
};

exports.getById = async (req, res) => {
    try {
        const id = req.params.userId;
        var data = await repository.getById(id);
        res.status(200).send(data);
    } catch (error){
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
    
}

exports.post = async (req, res) => {

    try {
        await repository.post({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).send({
            message: "Usuário inserido com sucesso"
        })
    } catch (error) {
        res.status(500).send({
            message: "Falha ao inserir um usuário",
            erro: error
        });

    }

};

exports.put = async (req, res) => {
    try {
        const id = req.params.userId;    
        const data = await repository.put(id, req.body);
        res.status(200).send({
            message:"Usuário atualizado com sucesso",
            dados: data
        })
    } catch (error) {
         res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}



exports.delete = async (req, res) =>{
    try {
        const id = req.params.userId;  
        await repository.delete(id);
        res.status(200).send({
            message:"Usuário removido com sucesso",
        })
    } catch (error) {
         res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
    
};