const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let produtos = [];
let idCounter = 1;

app.get('/', (req, res) => {
  res.json({
    message: 'API de produtos funcionando',
    totalProdutos: produtos.length,
  });
});

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.post('/produtos', (req, res) => {
  const { nome, preco, quantidade } = req.body || {};

  if (typeof nome !== 'string' || !nome.trim()) {
    return res.status(400).json({ message: 'Nome do produto é obrigatório.' });
  }

  const valor = Number(preco);
  const estoque = Number(quantidade);

  if (Number.isNaN(valor) || valor < 0) {
    return res.status(400).json({ message: 'Preço inválido.' });
  }

  if (Number.isNaN(estoque) || estoque < 0) {
    return res.status(400).json({ message: 'Quantidade inválida.' });
  }

  const novoProduto = {
    id: idCounter++,
    nome: nome.trim(),
    preco: valor,
    quantidade: estoque,
  };

  produtos.push(novoProduto);
  console.log(`[API] Produto cadastrado: ${novoProduto.nome} | R$ ${novoProduto.preco} | ${novoProduto.quantidade} un.`);

  return res.status(201).json(novoProduto);
});

app.delete('/produtos/:id', (req, res) => {
  const id = Number(req.params.id);
  const antes = produtos.length;

  produtos = produtos.filter((produto) => produto.id !== id);

  if (produtos.length === antes) {
    return res.status(404).json({ message: 'Produto não encontrado.' });
  }

  console.log(`[API] Produto removido com id ${id}`);
  return res.status(200).json({ message: 'Produto removido com sucesso.' });
});

app.listen(PORT, () => {
  console.log(`API de produtos rodando em http://localhost:${PORT}`);
  console.log('Pressione Ctrl + C para encerrar...');
});

