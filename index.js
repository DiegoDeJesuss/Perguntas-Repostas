const express = require("express"); //importando o express
const app = express(); // criando instância do express

app.set('view engine', 'ejs'); //estou dizendo para o Express usar o EJS como view engine

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: "8000"
    });
});



app.listen(8080, ()=>{console.log("App rodando!");});

