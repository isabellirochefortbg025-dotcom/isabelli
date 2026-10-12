import mongoose from "mongoose";

const url = "mongodb+srv://isarochefort15_db_user:12345@cluster0.jv8udfk.mongodb.net/?appName=Cluster0";

await mongoose.connect(url)
  .then(() => console.log("Conectado ao MongoDB com sucesso!"))
  .catch((err) => console.error("Erro ao conectar:", err));

export default mongoose; // Exporta o mongoose em vez da variável 'conexao'