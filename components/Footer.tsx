import Link from "next/link";
import Accost from "./index/Accost";
const Footer = () => {
    return (
        <div className='flex flex-col items-center space-y-2 md:space-y-0 bg-footer bg-cover text-white pb-2 px-4 md:px-16'>
            <div className='w-full mb-1 border-b-2 border-b-white'>
                <Accost />
            </div>
            <div className='flex flex-col md:flex-row py-2 space-x-0 space-y-4 md:space-y-0 md:space-x-4 items-center md:items-start justify-around w-full break-words'>
                <div className='flex flex-col items-center md:items-start space-y-1'>
                    <h3 className='font-semibold text-lg'>Contáctanos</h3>
                    <div className='flex flex-row  place-items-center space-x-2'>
                        <div className='w-6 text-center'>
                            <i className='fas text-2xl fa-mobile mt-1'></i>
                        </div>
                        <Link href='https://wa.link/twk436'>
                            +57 (315 684 3651)
                        </Link>
                    </div>
                    <div className='flex flex-row  place-items-center space-x-2'>
                        <div className='w-6 text-center'>
                            <i className='fas text-2xl fa-map-marker-alt mt-1'></i>
                        </div>
                        <span>
                            Estamos de forma remota para <br></br> proteger la
                            salud de nuestra flota
                        </span>
                    </div>
                    <div className='flex flex-row  place-items-center space-x-2'>
                        <div className='w-6 text-center'>
                            <i className='fas text-2xl fa-envelope mt-1'></i>
                        </div>
                        <span>info@skyredmarketing.com</span>
                    </div>
                </div>
                <div className='flex flex-col items-center md:items-start space-y-1'>
                    <h3 className='font-semibold text-lg'>Servicios</h3>
                    <p>• Creación de contenido </p>
                    <p>• Marketing en medios digitales </p>
                    <p>• Diseño y desarrollo de páginas web </p>
                    <p>• Gestión y administración de redes sociales </p>
                </div>
                <div className='flex flex-col items-center md:items-start space-y-1'>
                    <h3 className='font-semibold text-lg'>Accesos rápidos</h3>
                    <Link href='/portafolio'>• Portafolio</Link>
                    {/* <p>• ’Nombre de tienda’</p> */}
                    <Link href='/contactanos'>• Contáctanos</Link>
                    <div className='flex flex-row space-x-4 text-2xl'>
                        <Link href='https://www.facebook.com/skyredmarketing/'>
                            <a target='_blank'>
                                <i className='fab cursor-pointer fa-facebook-f pt-2'></i>
                            </a>
                        </Link>
                        <Link href='https://www.instagram.com/skyredmarketing/'>
                            <a target='_blank'>
                                <i className='fab cursor-pointer fa-instagram pt-2'></i>
                            </a>
                        </Link>
                        {/* <i className='fab cursor-pointer fa-youtube pt-2'></i> */}
                        <Link href='https://tiktok.com/@skyredmarketing'>
                            <a target='_blank'>
                                <i className='fab cursor-pointer fa-tiktok pt-2'></i>
                            </a>
                        </Link>
                        {/* <i className='fab cursor-pointer fa-twitter pt-2'></i> */}
                        <Link href='https://www.linkedin.com/company/sky-red-marketing/'>
                            <a target='_blank'>
                                <i className='fab cursor-pointer fa-linkedin pt-2'></i>
                            </a>
                        </Link>
                        <Link href='https://wa.link/twk436'>
                            <a target='_blank'>
                                <i className='fab cursor-pointer fa-whatsapp pt-2'></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
