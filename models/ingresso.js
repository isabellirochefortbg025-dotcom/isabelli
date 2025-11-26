import conexao from "../config/conexao.js";

 const IngressoSchema=conexao.Schema({
    assento:{type:String,required:true},
    nome_comprador:{type:String},
    numero_ingresso:{type:String,required:true},
    valor:{type:Number,required:true},
   
 })
const Ingresso = conexao.model("ingresso",IngressoSchema);
export default Ingresso