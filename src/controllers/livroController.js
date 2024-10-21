import livro from "../models/Livros.js"

class LivroController {

  static async listarLivro (req, res) {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
  }

};

export default LivroController;