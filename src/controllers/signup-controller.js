const signUpRepository = require("../repositories/signup-repository");
const User = require('../app/models/user');
//Register
exports.userRegister = async function(req, res){
   try {
        const user = await signUpRepository.userRegister({
            email: req.body.email,
            password: req.body.password
        });
        if (user){
            res.status(201).send({
                message: "Usuário inserido com sucesso"
            })
        }
        res.status(400).json({ message: "Usuário já cadastrado!" });
    } catch (error) {
        res.status(500).send({
            message: "Falha ao inserir um usuário",
            erro: error
        });

    }
}
//Login
exports.userLogin = async function(req, res){
    try {
        const user = await signUpRepository.userLogin({
            email: req.body.email,
            password: req.body.password
        });
        
        if (user){
            res.status(200).send({
                message: "Login realizado com sucesso!"
            });
        } 
        res.status(401).json({ message: "Email ou senha inválidos!" });
    
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Falha no login",
            erro: error
        });
    }
}
