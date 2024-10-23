import mongoose from "mongoose";
async function conectarNaDatabase() {
    mongoose.connect("mongodb+srv://adm:adm123@cluster0.oxr1t.mongodb.net/livraria1?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
} ;

export default conectarNaDatabase;



