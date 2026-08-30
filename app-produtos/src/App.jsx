import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const res = await fetch('http://localhost:3001/produtos');
        if (!res.ok) throw new Error('Não foi possível carregar os produtos.');
        setProdutos(await res.json());
      } catch (error) {
        setErro(error.message);
      }
    }

    carregarProdutos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    try {
      const res = await fetch('http://localhost:3001/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, preco: Number(preco), quantidade: Number(quantidade) })
      });
      if (!res.ok) throw new Error('Não foi possível cadastrar o produto.');
      const novoProduto = await res.json();
      setProdutos((produtosAtuais) => [...produtosAtuais, novoProduto]);
      setNome('');
      setPreco('');
      setQuantidade('');
    } catch (error) {
      setErro(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/produtos/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Não foi possível excluir o produto.');
      setProdutos((produtosAtuais) => produtosAtuais.filter((produto) => produto.id !== id));
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Cadastro de Produtos</h1>
      {erro && <p role="alert">{erro}</p>}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
        <input placeholder="Preço" type="number" value={preco} onChange={e => setPreco(e.target.value)} required />
        <input placeholder="Quantidade" type="number" value={quantidade} onChange={e => setQuantidade(e.target.value)} required />
        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {produtos.map(p => (
          <li key={p.id} style={{ marginBottom: '10px' }}>
            {p.nome} - R$ {p.preco} ({p.quantidade} un.) 
            <button onClick={() => handleDelete(p.id)} style={{ marginLeft: '10px' }}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

