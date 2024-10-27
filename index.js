const express = require("express"); //importando o express
const app = express(); // criando instância do express

app.set('view engine', 'ejs'); //estou dizendo para o Express usar o EJS como view engine

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-cola", preco:5},
        {nome: "Leite", preco: 1.45},
        {nome: "Carne", preco: 15},
        {nome: "Redbull", preco: 6}
    ]






    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: "8000",
        msg: exibirMsg,
        produtos:  produtos,
    });
});



app.listen(8080, ()=>{console.log("App rodando!");});

