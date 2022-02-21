import Image from "next/image";
import React from "react";

const Services = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8 px-4 md:px-48 pt-16 pb-8 md:pb-32'>
            <div className='flex flex-col flex-none space-y-3 w-full md:w-1/3'>
                <h2 className='text-4xl font-bold text-primary'>
                    Nuestros servicios
                </h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quisquam iste ipsum id, ducimus neque hic corporis? Delectus
                    a assumenda natus perspiciatis? Animi at odio, illo non
                    placeat assumenda quidem maxime.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quisquam iste ipsum id, ducimus neque hic corporis? Delectus
                    a assumenda natus perspiciatis? Animi at odio, illo non
                    placeat assumenda quidem maxime.
                </p>
                <button type='button' className='btn-primary w-1/3'>
                    VER MÁS
                </button>
            </div>
            <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center relative'>
                <CardServices
                    title='Producción de contenido'
                    icon='/img/icon-video.png'
                    subtitles={[
                        "• Diseño de branding",
                        "• Producción audiovisual",
                        "• Toma y edición de fotografía",
                        "• Diseño de anuncios publicitarios",
                    ]}
                    urlRedirect='/'
                    className=""
                />
                <CardServices
                    title='Marketing'
                    icon='/img/icon-marketing.png'
                    subtitles={[
                        "• Gestión y administración de redes sociales",
                        "• Marketing en medios digitales",
                        "• Campañas publicitarias en redes sociales ",
                    ]}
                    urlRedirect='/'
                    className="md:absolute md:top-16 md:z-50"
                />
                <CardServices
                    title='Diseño y desarrollo web'
                    icon='/img/icon-web.png'
                    subtitles={[
                        "• Diseño y desarrollo de ecommerce",
                        "• Diseño y desarrollo de páginas web",
                        "• Diseño y desarrollo de landing page",
                    ]}
                    urlRedirect='/'
                    className="md:ml-52"
                />
            </div>
        </div>
    );
};

interface CardServicesInterface {
    title: string;
    icon: string;
    subtitles: Array<any>;
    urlRedirect: string;
    className?: string;
}

const CardServices = ({
    title = "",
    icon = "",
    subtitles = [],
    urlRedirect = "",
    className = "",
}: CardServicesInterface) => (
    <div className={`flex flex-col bg-white justify-between items-center space-y-2 shadow-xl rounded-md py-4 px-8 w-60 ${className}`}>
        <h2 className='font-semibold text-center'>{title}</h2>
        <div>
            <Image width={100} height={100} alt={title} src={icon}></Image>
        </div>
        <div className='flex flex-col space-y-1'>
            {subtitles.map((subtitle) => (
                <div key={subtitle} className='flex flex-row'>
                    <p>{subtitle}</p>
                </div>
            ))}
        </div>
        <button type='button' className='btn-primary'>
            VER MÁS
        </button>
    </div>
);

export default Services;
