import CardAbout from "../components/Card-about/CardAbout";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

export default function Sobre () {
    return (
        <>
            <Navbar/>

            {/* Principal div in About page */}
            <main className="main-content-about w-full min-h-screen flex-grow bg-jet flex flex-col items-center justify-center overflow-auto">
                <CardAbout/>
            </main>

            <Footer/>
        </>
    )
}