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
                <OurTeam />
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
                Ser una agencia de marketing digital reconocida a nivel nacional
                por su enfoque de innovación, inclusión, responsabilidad social
                y compromiso con los nuevos talentos colombianos para que se
                conviertan en lideres estratégicos que nos permita apoyar a
                pequeños y medianos empresarios a posicionar sus marcas en el
                mundo digital, ofreciéndoles estrategias eficientes que los
                impulse al cumplimiento de sus objetivos estratégicos.
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
                Contar con un equipo de trabajo profesional y multidisciplinario
                que nos permitan comprender las necesidades empresariales de
                nuestros clientes para diseñar soluciones integrales, eficientes
                y de valor para sus marcas.
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
            <div className='flex flex-col space-y-2 border shadow-md w-56'>
                <Image
                    src='/img/icon-marketing.png'
                    alt='image'
                    width={48}
                    height={140}
                />
                <div className='p-4 flex flex-col space-y-2 items-stretch'>
                    <p className='font-bold'>Maria Fernanda Bravo</p>
                    <p className='font-light'>Chief Executive Officer (CEO)</p>
                    <p className='font-light'>ING industrial y diseñador</p>
                </div>
            </div>
            <div className='flex flex-col space-y-2 border shadow-md w-56'>
                <Image
                    src='/img/icon-marketing.png'
                    alt='image'
                    width={48}
                    height={140}
                />
                <div className='p-4 flex flex-col space-y-2 items-stretch'>
                    <p className='font-bold'>Santiago Prado</p>
                    <p className='font-light'>Chief Operating Officer (COO)</p>
                    <p className='font-light'>ING de sistemas y diseñador</p>
                </div>
            </div>
            <div className='flex flex-col space-y-2 border shadow-md w-56'>
                <Image
                    src='/img/icon-marketing.png'
                    alt='image'
                    width={48}
                    height={140}
                />
                <div className='p-4 flex flex-col space-y-2 items-stretch'>
                    <p className='font-bold'>Joan Sebastian Oviedo</p>
                    <p className='font-light'>Business Digital Developer</p>
                    <p className='font-light'>ING informático</p>
                </div>
            </div>
        </div>
    </div>
);
