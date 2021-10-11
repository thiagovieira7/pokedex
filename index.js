const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const pokedex = [
  {
    numero: 6,
    nome: "charizard",
    tipo: "fire and flying",
    imagem: "/midia/img/006Charizard_AG_anime.png",
    descricao: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
    altura: 2,
    peso: 90,
    categoria: "flame",
    habilidade: "blaze",
  },
  {
    numero: 9,
    nome: "blastoise",
    tipo: "walter",
    imagem: "/midia/img/stat-blastoise.png",
    descricao: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
    altura: 2,
    peso: 85,
    categoria: "shellfish",
    habilidade: "torrent",
    
  },
  {
    numero: 11,
    nome: "metapod ",
    tipo: "bug",
    imagem: "/midia/img/Metapod.png",
    descricao: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
    altura: 1,
    peso: 9,
    categoria: "cocoon",
    habilidade: "shed skin",
  }
  
];


app.get("/", (req, res) => res.render("../view/index", {pokedex}));
app.get("/detalhes", (req, res) => res.render("../view/detalhes", {pokedex}));
app.get("/cadastro", (req, res) => res.render("../view/cadastro" ));





app.post("/new", (req, res) => {
  const {
        numero,
        nome,
        tipo, 
        imagem, 
        descricao,
        altura,
        peso,
        categoria,
        habilidade,
  } = req.body;
 
         
  
  pokedex.push({
    numero,
    nome,
    tipo, 
    imagem, 
    descricao,
    altura,
    peso,
    categoria,
    habilidade,
  });
  
  res.redirect("/");
        
});
  
  
  
    app.listen(port, () =>  
    console.log(`Servidor rodando em http://localhost:${port}`));
  // const listaPokemon = ["Numero: ", "Nome: ", "Tipo: ", "Imagem: ", "Descrição", "Altura: ", "Peso: ", "Categoria: ", "Habilidade: "];
