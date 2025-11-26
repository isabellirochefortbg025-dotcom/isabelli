import conexao from "../config/conexao.js";

 const FilmeSchema=conexao.Schema({
    titulo:{type:String,required:true},
    duracao:{type:String,required:true},
    genero:{type:String,required:true},
    classificacao:{type:Number,required:true},
    foto:{type:Buffer,

       get: (valor) => {
           if (!valor) return null;
             return `data:image/png;base64,${valor.toString('base64')}`;
         }
    }
})
const Filme = conexao.model("Filme",FilmeSchema);
export default Filme