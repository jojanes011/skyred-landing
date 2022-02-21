import Image from "next/image";
import React from "react";

interface ServiceSectionInterface {
    title: string;
    services: Array<any>;
    fontColor: string;
}

const ServiceSection = ({
    title = "",
    services = [],
    fontColor = "primary",
}: ServiceSectionInterface) => {
    return (
        <div className='flex flex-col space-y-8 items-center text-center pb-8 px-4'>
            <div>
                <h2 className={`text-4xl font-bold text-[${fontColor}]`}>{title}</h2>
            </div>
            <div className='flex flex-wrap flex-row justify-around sm:space-x-8 space-y-4 sm:space-y-0'>
                {services.map(({image, name}, key) => (
                    <div className="border border-gray-300 rounded-md shadow-xl flex flex-col space-y-2 items-center text-center p-4" key={key}>
                        <div className="p-4">
                            <Image src={image} width={90} height={80} alt={name}  />
                        </div>
                        <p className="font-semibold">{name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;