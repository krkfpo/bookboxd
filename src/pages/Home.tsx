import Navbar from '../components/Header/Navbar';
import Inicio from '../components/Inicio';
import BookList from '../components/BookList';

export default function Home () {
    return (
        <>
        <Navbar />
        <main className='main-content w-full min-h-screen bg-zinc-700 flex flex-col items-center justify-center'>
            <Inicio />
            <BookList/>
        </main>
        </>
    )
}