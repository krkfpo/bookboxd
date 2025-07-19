import { Search } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function Navbar () {

    const navigate = useNavigate();

    return (
        <div className="z-10 fixed w-full px-40 h-16 bg-zinc-600 text-white shadow-2xl flex justify-between items-center">
            <h1 className="font-bold text-2xl">Bookboxd</h1>

            <div className="navegacao">
                <ul className="flex flex-row gap-5 font-semibold">
                    <li className='cursor-pointer' onClick={() => navigate('/')}>Início</li>
                    <li className='cursor-pointer' onClick={() => navigate('/Sobre')}>Conheça</li>
                </ul>
            </div>
                <Search className="cursor-pointer"/>
        </div>
    )
}