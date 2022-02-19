import Image from "next/image";
import React from "react";
import Header from "../../components/Header";

const Nosotros = () => {
    return (
        <div>
            <Header title='SOBRE NOSOTROS' titleBreadcrumb='NOSOTROS' />
            <div className='flex flex-col space-y-8 md:space-y-16 pb-8'>
                <div className='flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-16 space-y-4 md:space-y-0 pt-16 px-4 md:px-16'>
                    <div className='w-full md:w-1/2'>
                        <video autoPlay loop poster='/img/video.png'>
                            <source src='/video/blue.mp4' />
                        </video>
                    </div>
                    <div className='flex flex-col space-y-4 w-full md:w-1/2'>
                        <h2 className='title'>Sobre nosotros</h2>
                        <p>
                            Somos un equipo con conocimientos
                            multidisciplinarios, apasionados por la producción
                            de contenido, el desarrollo web y el marketing
                            digital.
                        </p>
                        <p>
                            Contamos con la capacidad y disposición para
                            ayudarte a inmortalizar tu marca en los medios
                            digitales.
                        </p>
                        <p>
                            Nuestro propósito es acompañarte en este viaje
                            empresarial para que tu marca llegue a los límites
                            del éxito más altos, creando estrategias que te
                            permitan generar conexiones amigables con tu público
                            objetivo.
                        </p>
                    </div>
                </div>
                <Vision />
                <Mision />
                {/* <OurTeam /> */}
            </div>
        </div>
    );
};

export default Nosotros;

const Vision = () => (
    <div className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-32'>
        <div className='flex flex-col space-y-2'>
            <h2 className='title'>Visión</h2>
            <p>
                Somos un equipo con conocimientos multidisciplinarios,
                apasionados por la producción de contenido, el desarrollo web y
                el marketing digital.
            </p>
        </div>
        <div></div>
    </div>
);

const Mision = () => (
    <div className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-32'>
        <div></div>
        <div className='flex flex-col space-y-2'>
            <h2 className='title'>Misión</h2>
            <p>
                Somos un equipo con conocimientos multidisciplinarios,
                apasionados por la producción de contenido, el desarrollo web y
                el marketing digital.
            </p>
        </div>
    </div>
);

const OurTeam = () => (
    <div className='px-32 flex flex-col items-center space-y-4'>
        <div>
            <h2 className='title'>Nuestro equipo</h2>
        </div>
        <div className='grid grid-flow-col justify-items-center place-content-center gap-8'>
            <div className='flex flex-col space-y-2 border shadow-md w-48'>
                <Image
                    src='/img/icon-marketing.png'
                    alt='image'
                    width={48}
                    height={140}
                />
                <div className='p-4'>
                    <p className="font-bold">Santiago Prado</p>
                    <p className="font-light">COO</p>
                    <p className="font-light">ING de sistemas</p>
                </div>
            </div>
            <div className='flex flex-col space-y-2 border shadow-md w-48'>
                <Image
                    src='/img/icon-marketing.png'
                    alt='image'
                    width={48}
                    height={140}
                />
                <div className='p-4'>
                    <p className="font-bold">Santiago Prado</p>
                    <p className="font-light">COO</p>
                    <p className="font-light">ING de sistemas</p>
                </div>
            </div>
            <div className='flex flex-col space-y-2 border shadow-md w-48'>
                <Image
                    src='/img/icon-marketing.png'
                    alt='image'
                    width={48}
                    height={140}
                />
                <div className='p-4'>
                    <p className="font-bold">Santiago Prado</p>
                    <p className="font-light">COO</p>
                    <p className="font-light">ING de sistemas</p>
                </div>
            </div>
        </div>
    </div>
);
