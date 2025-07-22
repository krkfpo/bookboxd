import { useParams, useNavigate } from "react-router-dom";

import livros from "../../data/livros";
import Navbar from "../header/Navbar"
import HalfRating from "../HalfRating"
import Footer from "../footer/Footer";

import { MoveLeft, BookOpenText, Star } from 'lucide-react';

import { motion } from 'framer-motion';

export default function CardBook () {
    const { id } = useParams()
    const livro = livros.find(l => l.id === Number(id))

    if (!livro) return <p>Livro não foi encontrado</p>

    const navigate = useNavigate();
    return (
        <>
            <Navbar/>

            {/* Principal card book */}
            <motion.main
                className='main-content bg-gradient-to-br flex-grow from-jet via-zika to-green-gradient-2 animate-gradient w-full min-h-screen p-10 flex items-center justify-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
                <div className="card-main-content h-auto w-full max-w-[90vw] sm:max-w-[600px] md:max-w-xl backdrop-blur-sm bg-black/20 border border-white/20 rounded-xl flex flex-col md:flex-row lg:flex-row justify-center gap-2 md:gap-5 py-5 shadow-lg">
                        {/* Imagem da capa do livro */}
                        <div className="card-image w-36 md:w-44 flex flex-col items-left gap-2">
                            <img
                            src={livro.capa}
                            alt={livro.titulo}
                            className="w-full h-auto shadow-md rounded-xl object-cover"
                            />
                            <HalfRating/>
                        </div>

                        {/* Informações do livro */}
                        <div className="card-info flex gap-1 flex-col md:w-1/2">
                            <h1 className="font-bold text-2xl md:text-3xl text-white">{livro.titulo}</h1>
                            <h3 className="text-white font-semibold text-lg md:text-xl">{livro.autor}</h3>

                            <p className="text-sm md:text-md text-white">{livro.sinopse}</p>

                            <div className="card-info-secundary md:text-sm text-gray-400 flex flex-col gap-2">
                                <p>Publicação: {livro.anoPublicacao}</p>
                                <p className="flex flex-row gap-2"><BookOpenText />{livro.paginas} páginas</p>
                                <p className="flex flex-row gap-2"><Star/>{livro.avalicao}/5</p>
                            </div>

                        </div>
                    </div> 
            </motion.main>

            <Footer/>
        </>
    )
}