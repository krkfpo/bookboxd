import { useLocation } from "react-router-dom";
import React from "react";
import BookList from '../components/book/BookList'

export default function SearchResults({ books }) {
  const location = useLocation();
  const navigate = useNavigate();
  const books = location.state?.searchResults ?? [];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // tiny delay to show spinner on fast loads
    if (books.length) setTimeout(() => setLoading(false), 300);
  }, [books]);

  function handleClick(id: string) {
    navigate(`/Book/${id}`, {
      state: { book: books.find((b) => b.id === id) },
    });
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="main-content-home bg-gradient-to-br from-jet via-zika to-green-gradient-2 animate-gradient w-full min-h-screen p-10 flex items-center justify-center">
          <div className="text-white text-xl animate-pulse">Carregando...</div>
        </main>
        <Footer />
      </>
    );
  }

  if (!books.length) {
    return (
      <>
        <Navbar />
        <main className="main-content-home bg-gradient-to-br from-jet via-zika to-green-gradient-2 animate-gradient w-full min-h-screen p-10 flex flex-col items-center justify-center">
          <h2 className="text-white text-2xl mb-4">
            Nenhum resultado encontrado
          </h2>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Voltar
          </button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-700 p-4">
      
      <h2 className="text-white text-xl mb-4">
        Search Results ({searchResults.length})
      </h2>
      
      <BookList books={searchResults} />
    </div>
  );
}
