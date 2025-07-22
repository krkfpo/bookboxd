import CardAbout from "../components/Card-about/CardAbout";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

import { motion } from 'framer-motion';

export default function Sobre () {
    return (
        <>
            <Navbar/>

            <motion.main
                className='main-content-home w-full min-h-screen p-10 flex flex-col items-center justify-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                {/* Principal div in About page */}
                    <CardAbout/>
            </motion.main>

            <Footer/>
        </>
    )
}