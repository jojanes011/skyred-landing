import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Main = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClickShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='flex flex-col justify-between bg-main bg-cover bg-bottom text-white space-y-8 px-4 md:px-16 pt-8 py-32 md:py-8'>
            <div className='flex sm:flex-row md:flex-col lg:flex-row items-center sm:space-x-8 md:space-x-0 lg:space-x-8 md:space-y-4 justify-between sm:pb-0 md:pb-8 lg:pb-0'>
                <a href='/'>
                    <Image
                        width={148}
                        height={42}
                        alt='logo'
                        src='/img/logo.png'
                    />
                </a>
                <div className='hidden md:flex flex-row sm:space-x-8 md:space-x-4 lg:space-x-8 text-base sm:text-sm md:text-base justify-around font-bold'>
                    <Link href='/'>INICIO</Link>
                    <Link href='/servicios'>SERVICIOS</Link>
                    <Link href='/nosotros'>NOSOTROS</Link>
                    <Link href='/portafolio'>PORTAFOLIO</Link>
                    <Link href='/planes'>PLANES</Link>
                    <Link href='/blog'>BLOG</Link>
                    <Link href='/contactanos'>CONTÁCTANOS</Link>
                </div>
                <button
                    type='button'
                    className='md:hidden flex'
                    onClick={handleClickShowMenu}>
                    <i className='fas fa-bars text-4xl' />
                </button>
            </div>
            {showMenu ? (
                <div className='md:hidden flex flex-col space-y-4 font-bold'>
                    <Link href='/'>INICIO</Link>
                    <Link href='/servicios'>SERVICIOS</Link>
                    <Link href='/nosotros'>NOSOTROS</Link>
                    <Link href='/portafolio'>PORTAFOLIO</Link>
                    <Link href='/planes'>PLANES</Link>
                    <Link href='/blog'>BLOG</Link>
                    <Link href='/contactanos'>CONTÁCTANOS</Link>
                </div>
            ) : (
                <></>
            )}
            <div className='flex flex-col md:flex-row items-center justify-between py-4 h-96'>
                <div className='flex flex-col space-y-4 w-full md:w-1/2'>
                    <h1 className='font-extrabold text-4xl lg:text-5xl'>
                        SOMOS UNA AGENCIA DE MARKETING DIGITAL Y DESARROLLO WEB
                    </h1>
                    <p>
                        Dispuesta a acompañar a todos los emprendedores que
                        quieran hacer un viaje hacia el espacio del aprendizaje
                        y éxito de sus marcas
                    </p>
                    <button type='button' className='btn-transparent'>
                        DESPEGAR
                    </button>
                </div>
                <div className='md:flex hidden'>
                    <Image
                        width={350}
                        height={350}
                        alt='rocket'
                        src='/img/rocket.png'
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
