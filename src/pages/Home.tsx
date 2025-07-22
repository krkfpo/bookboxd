import Navbar from '../components/header/Navbar';
import Inicio from '../components/Inicio';
import BookList from '../components/Book/BookList';
import Footer from '../components/footer/Footer';

export default function Home () {
    return (
        <>
        <Navbar />

        {/* Principal div in Home page */}
        <main className='main-content-home w-full min-h-screen p-10 bg-jet flex flex-col items-center justify-center'>
            <div className="max-w-6xl flex flex-col items-center gap-0 md:gap-10 justify-center">
                <Inicio />
                <BookList/>
            </div>
        </main>

        <Footer/>
        </>
    )
}