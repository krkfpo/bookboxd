import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import livros from "../data/livros";
import { useNavigate } from "react-router-dom";
import { MoveLeft } from 'lucide-react';


export default function Livros () {
    const { id } = useParams()
    const livro = livros.find(l => l.id === Number(id))

    if (!livro) return <p>Livro não foi encontrado</p>

    const navigate = useNavigate();

    return (
        <>
            <Navbar/>
            <main className="w-full min-h-screen flex flex-col items-center justify-center bg-zinc-700">
                <button className="flex text-white flex-row gap-2 w-1/3 mb-2 font-bold" onClick={() => navigate(-1)}><MoveLeft/>Voltar</button>

                <div className="p-8 w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 bg-zinc-900 rounded-xl text-white flex flex-row gap-10">
                    <img 
                    src={livro.capa} 
                    alt={livro.titulo} 
                    className="rounded-xl mb-4 h-64" 
                    />

                    <div>
                        <h1 className="text-3xl font-bold mb-4 ">{livro.titulo}</h1>
                        <p><strong>Autor:</strong> {livro.autor}</p>
                        <p><strong>Ano:</strong> {livro.anoPublicacao}</p>
                        <p><strong>Sinopse:</strong> {livro.sinopse}</p>
                        <div className="flex flex-wrap gap-2">
                            {livro.categoria.map((cat, index) => (
                                <span 
                                className="rounded-xl bg-zinc-800 px-3 w-auto p-0 mt-2 border border-zinc-700 flex items-center justify-center">{cat}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}