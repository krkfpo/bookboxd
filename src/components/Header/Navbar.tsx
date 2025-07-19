import { useNavigate } from "react-router-dom";

export default function Navbar () {
    const navigate = useNavigate();

    return (
        <header className="z-10 fixed w-full px-0 sm:px-2 md:px-10 lg:px-40 h-16 bg-zinc-600 text-white shadow-2xl justify-center flex items-center">
            {/* Cabeçado da Navbar */}
            <nav className="header-content flex justify-between items-center w-full px-5 sm:px-10">
                <h1 className="header-title font-bold text-2xl">Bookboxd</h1>

                {/* Área de Navegação */}
                <div className="header-navigation">
                    <ul className="flex flex-row gap-5 font-semibold">
                        <li className='cursor-pointer' onClick={() => navigate('/')}>Início</li>
                        <li className='cursor-pointer' onClick={() => navigate('/Sobre')}>Conheça</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}