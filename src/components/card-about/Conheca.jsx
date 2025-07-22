import React from 'react'
import { Github, Linkedin } from 'lucide-react';

const Conheca = () => {
  return (
    <div className="relative p-1 full rounded-xl bg-gradient-to-r from-green-gradient-1 via-green-gradient-2 to-green-gradient-3 animate-gradient">
          <div className="card-content-creator w-full h-auto p-5 flex flex-col gap-3 items-center bg-jet rounded-xl">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-green-gradient-1 via-green-gradient-2 to-green-gradient-3">
            Meet the creator</h1>
            <div className="card-content-image-creator w-full flex items-center justify-center">
              <img
                src="https://avatars.githubusercontent.com/u/115652855?v=4"
                className="h-20 rounded-full"
                alt=""
              />
            </div>
            <div className="card-content-info-creator flex flex-col items-center justify-center text-gray-300">
              <h2 className="font-semibold">Luccas Davi | @davittiw</h2>
              <p className='text-sm'>Creator and Full-Stack Developer</p>
            </div>
            <div className="card-content-redes-creator flex flex-row gap-2 justify-center">
              <a
                href="https://github.com/davittiw"
                target="_blank"
                className="nav-item"
              >
                <Github color="#fff" strokeWidth={1} />
              </a>
              <a
                href="https://www.linkedin.com/in/davttiw/"
                target="_blank"
                className="nav-item"
              >
                <Linkedin color="#fff" strokeWidth={1} />
              </a>
            </div>
          </div>
      </div>
  )
}

export default Conheca;