import mongoose from "mongoose";

const url = "mongodb+srv://aluno:123@cluster0.wlnvtja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const conexao = await mongoose.connect(url)

export default conexao