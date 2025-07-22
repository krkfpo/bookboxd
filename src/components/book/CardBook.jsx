import { useParams, useNavigate } from "react-router-dom";

import livros from "../../data/livros";
import Navbar from "../header/Navbar"
import HalfRating from "../HalfRating"
import { MoveLeft, BookOpenText, Star } from 'lucide-react';
import Footer from "../footer/Footer";

export default function CardBook () {
    const { id } = useParams()
    const livro = livros.find(l => l.id === Number(id))

    if (!livro) return <p>Livro não foi encontrado</p>

    const navigate = useNavigate();
    return (
        <>
            <Navbar/>
            {/* Principal card book */}
            <div className="card-content bg-jet w-full min-h-screen flex flex-col justify-center items-center">

                <div className="card-main-content shadow-md h-auto w-full max-w-[90vw] sm:max-w-[600px] md:max-w-4xl flex flex-col justify-center md:flex-row lg:flex-row gap-2 md:gap-5 py-5 rounded-md">

                    {/* Imagem da capa do livro */}
                    <div className="card-image w-36 md:w-44 flex flex-col items-left gap-2">
                        <img 
                        src={livro.capa} 
                        alt={livro.titulo}
                        className="rounded-xl w-full object-cover"
                        />
                        <HalfRating/>
                    </div>

                    {/* Informações do livro */}
                    <div className="card-info flex gap-1 flex-col md:w-1/2">
                        <h1 className="font-bold text-xl md:text-2xl text-white">{livro.titulo}</h1>
                        <h3 className="text-white font-semibold text-lg md:text-xl">{livro.autor}</h3>
                        <p className="text-sm md:text-md text-white text-justify">{livro.sinopse}</p>


                        <div className="card-info-secundary md:text-sm text-gray-400 flex flex-col gap-2">
                            <p>Publicação: {livro.anoPublicacao}</p>
                            <p className="flex flex-row gap-2"><BookOpenText/>{livro.paginas} páginas</p>
                            <p className="flex flex-row gap-2"><Star/>{livro.avalicao}/5</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}