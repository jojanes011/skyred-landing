import { Breadcrumbs } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderInterface {
    title: string;
    titleBreadcrumb: string;
}

const Header = ({ title = "", titleBreadcrumb = "" }: HeaderInterface) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClickShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='flex flex-col justify-between bg-header bg-cover text-white space-y-4 px-16 py-8'>
            <div className='flex flex-row items-center justify-between'>
                <Link href='/'>
                    <img
                        className="cursor-pointer"
                        width={148}
                        height={42}
                        alt='logo'
                        src='/img/logo.png'
                    />
                </Link>
                <div className='hidden md:flex flex-row space-x-8 justify-around font-bold'>
                    <Link href='/'>INICIO</Link>
                    <Link href='/servicios'>SERVICIOS</Link>
                    <Link href='/nosotros'>NOSOTROS</Link>
                    <Link href='/portafolio'>PORTAFOLIO</Link>
                    <Link href='/planes'>PLANES</Link>
                    {/* <Link href='/blog'>BLOG</Link> */}
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
                    {/* <Link href='/blog'>BLOG</Link> */}
                    <Link href='/contactanos'>CONTÁCTANOS</Link>
                </div>
            ) : (
                <></>
            )}
            <div className='text-center flex flex-col items-center space-y-2'>
                <h2 className='font-bold text-3xl lg:text-5xl'>{title}</h2>
                <Breadcrumbs aria-label='breadcrumb' color='white'>
                    <Link href='/'>INICIO</Link>
                    <span className='font-light text-white text-xs uppercase'>
                        {titleBreadcrumb}
                    </span>
                </Breadcrumbs>
            </div>
        </div>
    );
};

export default Header;
