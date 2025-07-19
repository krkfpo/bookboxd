import { Search } from 'lucide-react';

export default function SearchBar () {
    return (
        <div className="search bg-gray-300 rounded-lg w-full h-12 items-center px-5 py-1 flex flex-row gap-2">
            <Search />
            <input type="text" className='w-full bg-transparent text-black outline-none' placeholder='Pesquisar por título ou autor...' id="" />
        </div>
    )
}