import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";

export default function SearchResults() {
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
    <>
      <Navbar />

      <main className="main-content-home bg-gradient-to-br from-jet via-zika to-green-gradient-2 animate-gradient w-full min-h-screen p-10 flex flex-col items-center pt-20">
        <h2 className="text-white text-3xl font-bold mb-6">
          Search Results ({books.length})
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center items-center">
          {books.map((livro) => (
            <motion.div
              key={livro.id}
              className="relative group cursor-pointer"
              onClick={() => handleClick(livro.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="h-72 w-48 object-cover group-hover:brightness-50 rounded-lg transition-all duration-300"
                src={livro.capa}
                alt={livro.titulo}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/150x200?text=No+Cover";
                }}
              />
              <div className="absolute inset-0 rounded-lg bg-black bg-opacity-0 opacity-0 group-hover:opacity-70 group-hover:bg-opacity-70 transition-all duration-300 text-white items-center justify-center flex flex-col p-2">
                <p className="font-bold text-center">{livro.titulo}</p>
                <p className="text-center">{livro.autor}</p>
                <p className="text-center">Publicação: {livro.anoPublicacao}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
