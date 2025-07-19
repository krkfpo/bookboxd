import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import livros from '../data/livros';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Busca o primeiro livro que contenha o termo no título ou autor
    const livroEncontrado = livros.find(livro =>
      livro.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      livro.autor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (livroEncontrado) {
      navigate(`/Book/${livroEncontrado.id}`);
    } else {
      alert('Livro não encontrado!');
    }
  }

  return (
    <div className="search-form bg-gray-300 rounded-lg w-full h-12 items-center px-5 py-1 flex">
      <form
        onSubmit={handleSubmit}
        className="search-form flex flex-row justify-between w-full"
      >
        <input
          type="text"
          className="w-full bg-transparent text-black outline-none"
          placeholder="Pesquisar por título ou autor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" aria-label="Buscar">
          <Search />
        </button>
      </form>
    </div>
  );
}
