const User = require('../app/models/user');

exports.post = function (req, res){
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function(error){
        if (error)
            res.send("Erro ao tentar inserir um usuário" + error);

        res.status(201).json({ message: 'Usuário inserido com sucesso' });
    });
};

exports.get = function(req, res){
    User.find(function(err, usrs){
        if (err)
            res.send(err);
        res.status(200).json({
            message: 'Usuários retornados',
            users: usrs
        });
    });
};

exports.getById = function(req, res){
    const id = req.params.userId;
    User.findById(id, function(err, user){
        if (err) {
            res.status(500).json({
                message: "Erro ao encontrar"
            });
        } else if (user == null) {
            res.status(400).json({
                message: "Usuário não encontrado"
            });
        } else {
            res.status(200).json({
                message: "Usuário encontrado",
                user: user
            });
        }
    })
}