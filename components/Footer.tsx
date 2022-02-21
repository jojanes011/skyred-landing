import Accost from "./index/Accost";
const Footer = () => {
    return (
        <div className="flex flex-col items-center space-y-2 md:space-y-0 bg-footer bg-cover text-white pb-2 px-4 md:px-16">
            <div className="w-full mb-1 border-b-2 border-b-white">
                <Accost />
            </div>
            <div className='flex flex-row py-2 justify-around mx-auto w-full'>
                <div className='flex flex-col space-y-1'>
                    <h3 className='font-semibold text-lg'>Contáctanos</h3>
                    <div className='flex flex-row  place-items-center space-x-2'>
                        <div className='w-6 text-center'>
                            <i className='fas text-2xl fa-mobile mt-1'></i>
                        </div>
                        <span>+57 (3156843651)</span>
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
                <div className='hidden md:flex flex-col space-y-1'>
                    <h3 className='font-semibold text-lg'>Servicios</h3>
                    <p>• Creación de contenido </p>
                    <p>• Marketing en medios digitales </p>
                    <p>• Diseño y desarrollo de páginas web </p>
                    <p>• Gestión y administración de redes sociales </p>
                </div>
                <div className='flex flex-col space-y-1'>
                    <h3 className='font-semibold text-lg'>Accesos rápidos</h3>
                    <p>• Preguntas frecuentes</p>
                    {/* <p>• ’Nombre de tienda’</p> */}
                    <p>• Contáctanos</p>
                    <div className='flex flex-row space-x-4 text-2xl'>
                        <a href="https://www.facebook.com/skyredmarketing/">
                            <i className='fab fa-facebook-f pt-2'></i>
                        </a>
                        <a href="https://www.instagram.com/skyredmarketing/">
                            <i className='fab fa-instagram pt-2'></i>
                        </a>
                        {/* <i className='fab fa-youtube pt-2'></i> */}
                        <a href="https://tiktok.com/@skyredmarketing">
                            <i className='fab fa-tiktok pt-2'></i>
                        </a>
                        {/* <i className='fab fa-twitter pt-2'></i> */}
                        <a href="https://wa.link/twk436">
                            <i className='fab fa-whatsapp pt-2'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
