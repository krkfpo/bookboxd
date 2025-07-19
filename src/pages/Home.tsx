import Navbar from '../components/Navbar'
import Inicio from '../components/Inicio';
import Catalago from '../components/Catalago';

export default function Home () {
    return (
        <>
        <Navbar />

        <main className='w-full bg-zinc-700 min-h-screen flex flex-col items-center justify-center'>
            <Inicio />
            <Catalago />
        </main>

        </>
    )
}