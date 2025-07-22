import { Github, Linkedin, AtSign  } from 'lucide-react';

export default function Footer () {
    return (
        <footer className="bg-jet border-t-2 border-white/10 w-full h-20 sticky z-50 flex items-center justify-around flex-row">
            <div className="footer-container-info">
                <h1 className="text-white text-sm md:text-md">Developed by <a className="underline text-green-gradient-3 hover:text-green-gradient-2" href="https://davittiw.vercel.app/" target="_blank">@davittiw</a> © 2025</h1>
            </div>
            <div className="footer-container-redes flex flex-row gap-2">
                <a href="https://github.com/davittiw" target='_blank' className='nav-item'>
                    <Github color='#fff' strokeWidth={1.5}/>
                </a>
                <a href="https://www.linkedin.com/in/davttiw/" target='_blank' className='nav-item'>
                    <Linkedin color='#fff' strokeWidth={1.5}/>
                </a>
                <a href="https://davittiw.vercel.app/" target='_blank' className='nav-item'>
                    <AtSign color='#fff' strokeWidth={1.5}/>
                </a>
            </div>
        </footer>
    )
}