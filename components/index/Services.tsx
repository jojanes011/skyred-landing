import Image from "next/image";
import React from "react";

const Services = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between space-x-0 md:space-x-8 space-y-4 px-4 md:px-48 pt-8 lg:pt-16 pb-8 md:pb-32'>
            <div className='flex flex-col flex-none space-y-3 w-full md:w-2/3 lg:w-1/3'>
                <h2 className='text-4xl font-bold text-primary'>
                    Nuestros servicios
                </h2>
                <p>
                    En nuestra torre de control trabajamos en pro de la
                    <strong> innovación y exclusividad</strong> de tu marca para
                    que despegue hasta un espacio
                    <strong> lleno de éxito.</strong> Te ofrecemos una amplia
                    gama de <strong>servicios profesionales</strong> que te
                    ayudan a posicionar tu negocio en los medios digitales. A
                    continuación, te contamos todo lo que tenemos para tu
                    entorno empresarial.
                </p>
                <button type='button' className='btn-primary w-1/2'>
                    VER MÁS
                </button>
            </div>
            <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center relative'>
                <CardServices
                    title='Creación de contenido'
                    icon='/img/icon-video.png'
                    subtitles={[
                        "• Diseño de contenido gráfico y audiovisual",
                        "• Toma y edición de fotografía",
                        "• Diseño de anuncios publicitarios",
                    ]}
                    urlRedirect='/'
                    className=''
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
                    className='md:absolute md:top-16 md:z-50'
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
                    className='md:ml-52'
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
    <div
        className={`flex flex-col bg-white justify-between items-center space-y-2 shadow-xl rounded-md py-4 px-8 w-60 ${className}`}>
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
