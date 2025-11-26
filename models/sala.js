import conexao from "../config/conexao.js";

 const SalaSchema=conexao.Schema({
    numero:{type:String,required:true},
   capacidade:{type:String},
    tipo:{type:String,required:true},
 })
const Sala = conexao.model("sala",SalaSchema);
export default Sala