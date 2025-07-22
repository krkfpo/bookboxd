import { Github, Linkedin } from 'lucide-react';
import Conheca from './Conheca';

export default function CardAbout() {
  const infos = [
    {
      title: "Sobre o BookBoxd",
      description:
        "O BookBoxd é uma plataforma feita para amantes da leitura descobrirem e explorarem os dados técnicos de seus livros favoritos.",
      img: "https://i.pinimg.com/originals/5a/8e/72/5a8e72390a066bbede2cd33612760ca3.gif",
    },
    {
      title: "Stack Utilizada",
      description:
        "Utilizei ReactJS para construção da interface, TailwindCSS para estilização ágil e moderna, e TypeScript para garantir maior segurança e escalabilidade no código.",
      img: "https://i.pinimg.com/originals/ce/0c/fa/ce0cfae90221642cb692a426e2c636a7.gif",
      tech: ['TailwindCSS', 'ReactJS', 'Typescript']
    },
  ];

  return (
    <div className="card-content-about flex flex-col justify-around items-left w-full md:max-w-2xl gap-10 p-10">
    
    {/* Array de cada info */}
      {infos.map((info, index) => (
        <div className="card flex items-center md:gap-10" key={index}>

          <div className="card-content-info w-full">
            {/* Titulo de cada card */}
            <h1 className="text-3xl font-bold text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-green-gradient-1 via-green-gradient-2 to-green-gradient-3">{info.title}</h1>

            {/* Descricao do card */}
            <p className="font-regular text-sm md:text-sm text-gray-300">{info.description}</p>

            {/* Array do array de tecnologias */}
            {info.tech && ( 
                <ul className='flex gap-3 flex-row text-green-gradient-3'>
                    {info.tech.map((t, i) => (
                        <li key={i}>{t}</li>
                    ))}
                </ul>
            )}
          </div>

            {/* Card da imagem */}
          <div className="card-content-image w-full h-36 hidden md:block">

            {/* Esconde a imagem em dispositivos menores */}
            <img src={info.img} className='h-full w-full object-cover rounded-md' alt="" />
          </div>
        </div>
      ))}

      <Conheca/>
    </div>
  );
}
