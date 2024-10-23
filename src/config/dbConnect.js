import mongoose from "mongoose";
async function conectarNaDatabase() {
    mongoose.connect(process.env.STRING_CONEXAO_BD);

    return mongoose.connection;
} ;

export default conectarNaDatabase;



