import Image from "next/image";
import React from "react";

const Partners = () => {
    return (
        <div className='bg-[#F2F2F2] flex flex-col items-center space-y-4 py-8 px-4 md:px-16'>
            <h2 className='font-semibold text-2xl'>Nuestros partners</h2>
            <div className="flex flex-row justify-center space-x-2 md:space-x-16">
                <div>
                    <Image
                        alt='partners'
                        src='/img/partners.png'
                        width={150}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        alt='partners'
                        src='/img/partners.png'
                        width={150}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        alt='partners'
                        src='/img/partners.png'
                        width={150}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        alt='partners'
                        src='/img/partners.png'
                        width={150}
                        height={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default Partners;
