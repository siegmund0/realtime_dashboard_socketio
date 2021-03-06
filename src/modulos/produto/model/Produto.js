import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;

const ProdutoSchema = new Schema({
  produto: String,
  categoria: String,
  fornecedorRazaoSocial: String,
  fornecedorCnpj: String,
  valorVenda: Number,
  usuarioId: String,
});

module.exports = model('Produto', ProdutoSchema);
