const UserModel = require("../models/UserModel");

// retorna um array de objetos
async function find(req, res){
    try {

        // req.query pega informações da url 
        // Ex: https://educative.io/user?name=Theodore&isAuthor=true -> const {name, isAuthor} req.query
        
        // req.params pega os parametros da url
        // Ex: /user/:name -> const {name} = req.params

        // req.decoded é o token do jwt decodificado, esse atributo foi criado no auth

        // option é um objeto criado para servir de filtro na busca de usuário
        /* EX:
            let option = {
                nome: "Rafael", -> filtrar pelo campo nome exatamente igual a Rafael
                '$or': [ { version: 4 }, { name: "Andrea Le" } ] -> comparacao ou,
                name: { $not: { $eq: "Andrea Le" } } } -> filtar nome diferente de Andrea Le
                version: {$lte: 4}, -> versao menor ou igual a 4
                varsion: {$lt: 4}, -> versao menor que 4
                dateCreated: { $gt: Date('2000-06-22') } } -> data criada maior que a data 22/06/2000
                dateCreated: { $gte: Date('2000-06-22') } } -> data criada maior ou igual a data 22/06/2000 
                quantity: { $in: [20, 50] } } -> quantidade dentro dos valores do array 20 ou 50
            } 
        
        */
        let option = {};
        const response = await UserModel.find(option);
        return res.json(response);
    } catch (error) {
        return res.status(400).json({ error: "Ocorreu um erro para retornar as informações" });
    }
}
// retorna o item que foi criado
async function save(req, res){
    try {
        const result = await UserModel.create(req.body);
        return res.json(result);
    } catch (error) {
        console.log("error",error)
        return res.status(400).json({ error: "Ocorreu um erro durante o cadastro tende mais tarde!" });
    }
}
// retorn o item excluido
async function exclude(req, res) {
    try {
        const { id } = req.params;
        const result = await UserModel.findOneAndDelete({ _id: id });
        return res.json(result);
    } catch (error) {
        return res.status(400).json({ error: "Ocorreu um erro durante a exclusão tende mais tarde!" });
    }
}
// retorna elemento antigo antes das alterações
async function update(req, res) {
    try {
        const { id } = req.params;
        const result = await UserModel.findOneAndUpdate({ _id: id }, req.body);
        // res.sendStatus(200) = retorna a rota como sucesso, mas sem nenhuma informação
        return res.json(result);
    } catch (error) {
        console.log("error",error)
        return res.status(400).json({ error: "Ocorreu um erro durante a alteração tende mais tarde!" });
    }
}

module.exports = {find,save,exclude, update}