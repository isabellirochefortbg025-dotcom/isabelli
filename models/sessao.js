import conexao from "../config/conexao.js";

 const SessaoSchema=conexao.Schema({
    sala:{type:String,required:true},
    data_hora:{type:String},
    filme_titulo:{type:String,required:true},
    preco:{type:Number,required:true},
   
 })
const Sessao = conexao.model("sessao",SessaoSchema);
export default Sessao