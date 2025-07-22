export default function CardAbout () {
    const infos = [
        {
            title: 'Sobre o BookBoxd',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
            img: ''
        },
        {
            title: 'Sobre o criador',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
            img: ''
        },
        {
            title: 'Techs',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
            img: ''
        }
    ]

    return (
        <div className="card-content-about flex flex-col justify-around items-center max-w-2xl gap-10">
            {infos.map((info, index) => (
                <div className="card flex items-center">

                    <div className="card-content-info w-full" key={index}>
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-green-gradient-1 via-green-gradient-2 to-green-gradient-3">{info.title}</h1>
                        <p className="font-regular text-gray-300">{info.description}</p>
                    </div>

                    <div className="card-content-image w-full h-36">
                        <img src={info.img} alt="" />
                    </div>

                </div>
            ))}
        </div>
    )
}