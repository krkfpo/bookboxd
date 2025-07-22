import { useNavigate } from "react-router-dom";
import livros from "../../data/livros";

export default function BookList () {
    // Usando o react-router
    const navigate = useNavigate()

    function handleClick(id) {
        navigate(`/Book/${id}`)
    }
    
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center items-center">
        {livros.map((livro) => (
          <div
            key={livro.id}
            className="relative group cursor-pointer"
            onClick={() => handleClick(livro.id)}  
          >
            <img
              className="h-72 w-48 group-hover:brightness-50 rounded-lg transition-all duration-300"
              src={livro.capa}
              alt={livro.titulo}
            />
            <div className="absolute inset-0 rounded-lg bg-black bg-opacity-0 opacity-0 group-hover:opacity-70 group-hover:bg-opacity-70 transition-all duration-300 text-white items-center justify-center flex flex-col">
              <p className="font-bold">{livro.titulo}</p>
              <p>{livro.autor}</p>
              <p>Publicação: {livro.anoPublicacao}</p>
            </div>
          </div>
        ))}
      </div>
    )
}