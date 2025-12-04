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
import Filme from '../models/filme.js';
import Sessao from '../models/sessao.js';
import Sala from '../models/sala.js';
import Ingresso from '../models/ingresso.js';


//FIM MODELS

// Servir arquivos estáticos
//app.use(express.static(join(__dirname, '../public')));
app.set('views', join(__dirname, '../views'));

// Rotas
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

// COLOCAR AS ROTAS AQUI



//FIM ROTAS
app.listen(3001)
// Exporta o handler compatível com Vercel
export default app;