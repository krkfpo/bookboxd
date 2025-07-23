import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import HalfRating from "../HalfRating";
import { motion } from "framer-motion";

import { MoveLeft, BookOpenText, Star } from "lucide-react";
import RemoveMarkdown from "remove-markdown";

export default function CardBook() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [livro, setLivro] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        setLoading(true);
        // If book data was passed via state (from search), use that
        if (location.state?.book) {
          setLivro(location.state.book);
        } else {
          // Otherwise fetch from Open Library API using the work ID
          const response = await fetch(
            `https://openlibrary.org/works/${id}.json`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch book data");
          }
          const bookData = await response.json();

          // For get the id based on book and search for author
          let authorNames = "Autor desconhecido";

          if (bookData.authors && Array.isArray(bookData.authors)) {
            const authorFetches = bookData.authors.map(async (a) => {
            const res = await fetch(`https://openlibrary.org${a.author.key}.json`);
            const data = await res.json();

            return data.name;
          });
          
          const authors = await Promise.all(authorFetches);
          authorNames = authors.join(", ");
      }

          // Fetch cover image separately
          const coverId = bookData.covers?.[0];
          const coverUrl = coverId
            ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
            : "https://via.placeholder.com/150x200?text=No+Cover";

          // Format the book data to match our expected structure
          const formattedBook = {
            id: bookData.key.replace("/works/", ""),
            titulo: bookData.title,
            autor: authorNames,
            sinopse:
              bookData.description?.value ||
              bookData.description ||
              "Sinopse não disponível",
            anoPublicacao: bookData.first_publish_year || "Ano desconhecido",
            capa: coverUrl,
            avalicao: bookData.rating, // Default rating since API doesn't provide this
            paginas: bookData.number_of_pages?.toString() || "N/A",
          };

          setLivro(formattedBook);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookData();
  }, [id, location.state]);

  if (loading) {
    return (
      <>
        <Navbar />
        <motion.main
          className="main-content bg-gradient-to-br flex-grow from-jet via-zika to-green-gradient-2 animate-gradient w-full min-h-screen p-10 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="text-white">Carregando...</div>
        </motion.main>
        <Footer />
      </>
    );
  }

  if (error || !livro) {
    return (
      <>
        <Navbar />
        <motion.main
          className="main-content bg-gradient-to-br flex-grow from-jet via-zika to-green-gradient-2 animate-gradient w-full min-h-screen p-10 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="text-white text-center">
            <p>{error || "Livro não foi encontrado"}</p>
            <button
              onClick={() => navigate(-1)}
              className="mt-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Voltar
            </button>
          </div>
        </motion.main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Principal card book */}
      <motion.main
        className="main-content bg-gradient-to-br flex-grow from-jet via-zika to-green-gradient-2 animate-gradient w-full min-h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="card-main-content h-auto w-full max-w-[90vw] sm:max-w-[600px] md:max-w-xl xl:max-w-3xl backdrop-blur-sm bg-black/20 border border-white/20 rounded-xl flex flex-col md:flex-row lg:flex-row justify-center gap-2 md:gap-5 py-5 px-5 shadow-lg">

          <button
            onClick={() => navigate(-1)}
            className="absolute z-50 top-5 md:left-3 left-100 bg-red-900/20 p-1 rounded-full text-white hover:text-purple-400 transition-colors"
          >
            <MoveLeft size={24} />
          </button>
          {/* Imagem da capa do livro */}
          <div className="card-image w-36 md:w-64 flex flex-col items-left gap-2">
            <img
              src={livro.capa}
              alt={livro.titulo}
              className="w-full h-auto shadow-md rounded-xl object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/150x200?text=No+Cover";
              }}
            />
            <HalfRating value={parseFloat(livro.avalicao) || 0} />
          {/* Back button */}
          </div>

          {/* Informações do livro */}
          <div className="card-info flex gap-1 flex-col md:w-1/2">
            <h1 className="font-bold text-2xl md:text-3xl text-white">
              {livro.titulo}
            </h1>

            <h3 className="text-white font-semibold text-lg md:text-xl flex flex-row items-center gap-2">
              <img className="w-8 rounded-full h-8" src={livro.autorFoto} alt="" />
              {livro.autor}
            </h3>


            <p className="text-sm md:text-md text-white">
              {typeof livro.sinopse === "string"
                ? livro.sinopse.replace(/[*_#`~>-]/g, '')
                : "Description not found"}
            </p>

            <div className="card-info-secundary md:text-sm text-gray-400 flex flex-col gap-2">
              <p>Publicação: {livro.anoPublicacao}</p>
              <p className="flex flex-row gap-2">
                <BookOpenText />
                {livro.paginas} páginas
              </p>
              <p className="flex flex-row gap-2">
                <Star />
                {livro.avalicao}/5
              </p>
            </div>
          </div>
        </div>
      </motion.main>

      <Footer />
    </>
  );
}
