import { useNavigate } from "react-router-dom";
import { BookOpen } from 'lucide-react';

export default function Navbar () {
    const navigate = useNavigate();

    return (
        <header className="z-10 fixed w-full px-0 sm:px-2 md:px-10 lg:px-40 h-16 bg-zika text-white shadow-lg justify-center flex items-center">
            {/* Cabeçado da Navbar */}
            <nav className="header-content flex justify-around items-center w-full px-5 sm:px-10">
                <BookOpen size={33} color='#A735F2'/>

                {/* Área de Navegação */}
                <div className="header-navigation">
                    <ul className="flex flex-row gap-5 font-semibold">
                        <li className="nav-item" onClick={() => navigate('/')}>Início</li>
                        <li className="nav-item" onClick={() => navigate('/Sobre')}>Conheça</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}