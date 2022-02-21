import React from "react";

const AboutUs = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-16 py-8 px-4 md:px-48 space-y-4 md:space-y-0'>
            <div className='w-full md:w-1/2'>
                <video
                    autoPlay
                    loop
                    poster="/img/video.png"
                    >
                    <source src='/video/blue.mp4' />
                </video>
            </div>
            <div className='flex flex-col space-y-4 w-full md:w-1/2'>
                <h2 className='title'>Sobre nosotros</h2>
                <p>
                    Somos un equipo con conocimientos multidisciplinarios,
                    apasionados por la producción de contenido, el desarrollo
                    web y el marketing digital.
                </p>
                <p>
                    Contamos con la capacidad y disposición para ayudarte a
                    inmortalizar tu marca en los medios digitales.
                </p>
                <p>
                    Nuestro propósito es acompañarte en este viaje empresarial
                    para que tu marca llegue a los límites del éxito más altos,
                    creando estrategias que te permitan generar conexiones
                    amigables con tu público objetivo.
                </p>
                <button type='button' className='btn-primary w-1/3'>
                    VER MÁS
                </button>
            </div>
        </div>
    );
};

export default AboutUs;
