const express = require("express"); //importando o express
const app = express(); // criando instância do express
const bodyParser = require("body-parser");

app.set('view engine', 'ejs'); //estou dizendo para o Express usar o EJS como view engine
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//body parser


// rotas
app.get("/", (req, res) => { // rota index
    res.render("index");
});

app.get("/perguntar", (req, res) => { // rota perguntar
    res.render("perguntar");
})

app.post("/salvarpergunta",(req, res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulario recebido!" + titulo + "" + descricao) 
});





app.listen(8080, ()=>{console.log("App rodando!");});

