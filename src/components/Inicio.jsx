import SearchBar from './SearchBar'
import { BookOpen } from 'lucide-react';

export default function Inicio () {
    return (
        <div className="flex flex-col h-96 w-96 items-center justify-center gap-4">
            <h1 className="font-bold text-3xl flex text-white items-center gap-2 flex-row">
                <BookOpen />Bookboxd
            </h1>
            <p className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum deleniti quibusdam ea iste placeat molestias commodi accusantium ullam fugiat similique?</p>
            <SearchBar />
        </div>
    )
}