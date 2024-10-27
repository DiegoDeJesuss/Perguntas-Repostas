const express = require("express"); //importando o express
const app = express(); // criando instância do express

app.set('view engine', 'ejs'); //estou dizendo para o Express usar o EJS como view engine
app.use(express.static('public'));

app.get("/", (req, res) => { // rota index
    res.render("index")
});

app.get("/perguntar", (req, res) => { // rota perguntar
    res.render("perguntar");
})



app.listen(8080, ()=>{console.log("App rodando!");});

