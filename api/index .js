import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { createServer } from 'http';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Caminho correto das views e public
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// COLOCAR OS MODELS AQUI (colocar o caminho ../)
import Filme from './models/filme.js';
import Sessao from './models/sessao.js';
import Sala from './models/sala.js';
import Ingresso from './models/ingresso.js';


//FIM MODELS

// Servir arquivos estáticos
//app.use(express.static(join(__dirname, '../public')));
app.set('views', join(__dirname, '../views'));

// Rotas
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

// COLOCAR AS ROTAS AQUI
//rotas
app.get('/', (req, res) => {
    res.render("index")
})


//FILME
app.get('/filme/lst',async (req, res) => {
    const filme=await Filme.find()
  res.render("filme/lst", {filme:filme})
})

app.post('/filme/lst',async (req, res) => {
    const pesquisa= req.body.pesquisa;
    console.log(pesquisa)
    const filme=await Filme.find( 
         {titulo:{$regex:pesquisa, $options: "i"
            
         }
        })
        console.log(filme)
  res.render("filme/lst", {filme:filme})
})


app.get('/filme/add', (req, res) => {
    res.render("filme/add")
})

app.post('/filme/add/ok', upload.single("foto"),async (req, res) => {
    Filme.create({
        titulo:req.body.titulo,
        duracao:req.body.duracao,
        genero:req.body.genero,
        classificacao:req.body.classificacao,
        foto:req.file.buffer
    })
    const { titulo,duracao,genero,classificacao} = req.body;
    res.render("filme/addok", {
    titulo,
    duracao,
    genero,
    classificacao
    });
});

app.get('/filme/del/:id', async (req, res) => {
const filme = await Filme.findByIdAndDelete(req.params.id)
res.redirect("/filme/lst")

});


app.get('/filme/edt/:id', async (req, res) => {
const filme = await Filme.findById(req.params.id)
res.render("filme/edt", {filme})
})

app.post('/filme/edt/:id', async (req, res) => {
const filme = await Filme.findByIdAndUpdate(req.params.id, req.body)
res.render("filme/edtok")
});


//FIM FILME


//INICIO SESSAO
app.get('/sessao/lst', async(req, res) => {
     const sessao= await Sessao.find()
  res.render("sessao/lst", {sessao:sessao})
})

app.post('/sessao/lst', async(req, res) => {
    const pesquisa= req.body.pesquisa;
     const sessao= await Sessao.find(
        {sala:{$regex:pesquisa,
            $options: "i"
        }
    })
  res.render("sessao/lst", {sessao:sessao})
})

app.get('/sessao/add', (req, res) => {
    res.render("sessao/add")
})

app.post('/sessao/add/ok',async (req, res) => {
    const { sala,data_hora,preco,filme_titulo } = req.body;
     await Sessao.create (req.body)
    res.render("sessao/addok", {
    sala,
    data_hora,
    preco,
    filme_titulo
    });
});


app.get('/sessao/del/:id', async (req, res) => {
const sessao = await Sessao.findByIdAndDelete(req.params.id)
res.redirect("/sessao/lst")

});


app.get('/sessao/edt/:id', async (req, res) => {
const sessao = await Sessao.findById(req.params.id)
console.log(sessao)
res.render("sessao/edt", {sessao})
})

app.post('/sessao/edt/:id', async (req, res) => {
const sessao = await Sessao.findByIdAndUpdate(req.params.id, req.body)
res.render("sessao/edtok")
});


//FIM SESSAO


//INICIO SALA
app.get('/sala/lst', async(req, res) => {
     const sala= await Sala.find()
  res.render("sala/lst", {sala:sala})
})

app.post('/sala/lst', async(req, res) => {
    const pesquisa= req.body.pesquisa;
     const sala= await Sala.find(
        {numero:{$regex:pesquisa,
            $options: "i"
        }
    })
  res.render("sala/lst", {sala:sala})
})

app.get('/sala/add', (req, res) => {
    res.render("sala/add")
})

app.post('/sala/add/ok',async (req, res) => {
    const { numero,capacidade,tipo} = req.body;
     await Sala.create (req.body)
    res.render("sala/addok", {
    numero,
    capacidade,
    tipo
    });
});


app.get('/sala/del/:id', async (req, res) => {
const sala = await Sala.findByIdAndDelete(req.params.id)
res.redirect("/sala/lst")

});


app.get('/sala/edt/:id', async (req, res) => {
const sala = await Sala.findById(req.params.id)
console.log(sala)
res.render("sala/edt", {sala})
})

app.post('/sala/edt/:id', async (req, res) => {
const sala = await Sala.findByIdAndUpdate(req.params.id, req.body)
res.render("sala/edtok")
});

//fim sala

//INICIO ingresso
app.get('/ingresso/lst', async(req, res) => {
     const ingresso= await Ingresso.find()
  res.render("ingresso/lst", {ingresso:ingresso})
})

app.post('/ingresso/lst', async(req, res) => {
    const pesquisa= req.body.pesquisa;
     const ingresso= await Ingresso.find(
        {assento:{$regex:pesquisa,
            $options: "i"
        }
    })
  res.render("ingresso/lst", {ingresso:ingresso})
})

app.get('/ingresso/add', (req, res) => {
    res.render("ingresso/add")
})

app.post('/ingresso/add/ok',async (req, res) => {
    const {assento,nome_comprador,numero_ingresso,valor} = req.body;
     await Ingresso.create (req.body)
    res.render("ingresso/addok", {
    assento,
    nome_comprador,
    numero_ingresso,
    valor
    });
});


app.get('/ingresso/del/:id', async (req, res) => {
const ingresso = await Ingresso.findByIdAndDelete(req.params.id)
res.redirect("/ingresso/lst")

});


app.get('/ingresso/edt/:id', async (req, res) => {
const ingresso = await Ingresso.findById(req.params.id)
console.log(ingresso)
res.render("ingresso/edt", {ingresso})
})

app.post('/ingresso/edt/:id', async (req, res) => {
const ingresso = await Ingresso.findByIdAndUpdate(req.params.id, req.body)
res.render("ingresso/edtok")
});

//site

app.get('/site',async (req,res)=> {
    const filmes= await Filme.find()
    const sessoes= await Sessao.find()
    const ingressos= await Ingresso.find()
    const salas= await Sala.find()


res.render("site/index",{filmes,sessoes,ingressos,salas})
})



//FIM ROTAS
app.listen(3002)
// Exporta o handler compatível com Vercel
export default app;