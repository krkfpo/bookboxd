import SearchBar from './SearchBar'
import IconBookboxd from './IconBookboxd';

export default function Inicio () {
    return (
        <div className="flex flex-col h-96 w-96 items-center justify-center gap-4">
            <IconBookboxd/>

            <p className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum deleniti quibusdam ea iste placeat molestias commodi accusantium ullam fugiat similique?</p>
            <SearchBar/>
        </div>
    )
}