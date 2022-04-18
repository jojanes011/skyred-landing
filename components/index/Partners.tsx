import Image from "next/image";
import React from "react";

const Partners = () => {
    return (
        <div className='bg-[#F2F2F2] flex flex-col items-center space-y-4 py-8 px-4'>
            <h2 className='font-semibold text-2xl'>Nuestros clientes</h2>
            <div className={"scroll flex flex-row justify-center space-x-2 md:space-x-16 overflow-x-auto"}>
                <div className='flex-shrink-0'>
                    <Image
                        alt='partners'
                        src='/img/clients/maya.png'
                        width={120}
                        height={120}
                    />
                </div>
                <div className='flex-shrink-0'>
                    <Image
                        alt='partners'
                        src='/img/clients/encactus.png'
                        width={120}
                        height={120}
                    />
                </div>
                <div className='flex-shrink-0'>
                    <Image
                        alt='partners'
                        src='/img/clients/ipao.png'
                        width={120}
                        height={120}
                    />
                </div>
                <div className='flex-shrink-0'>
                    <Image
                        alt='partners'
                        src='/img/clients/castillo.png'
                        width={120}
                        height={120}
                    />
                </div>
                <div className='flex-shrink-0'>
                    <Image
                        alt='partners'
                        src='/img/clients/sinay.png'
                        width={120}
                        height={120}
                    />
                </div>
                <div className='flex-shrink-0'>
                    <Image
                        alt='partners'
                        src='/img/clients/precitop.png'
                        width={120}
                        height={120}
                    />
                </div>
                <div className='flex-shrink-0'>
                    <Image
                        alt='partners'
                        src='/img/clients/uno.png'
                        width={120}
                        height={120}
                    />
                </div>
                <div className='flex-shrink-0'>
                    <Image
                        alt='partners'
                        src='/img/clients/angeles.png'
                        width={120}
                        height={120}
                    />
                </div>
                <div className='flex-shrink-0'>
                    <Image
                        alt='partners'
                        src='/img/clients/bokdo.png'
                        width={120}
                        height={120}
                    />
                </div>
            </div>
        </div>
    );
};

export default Partners;
