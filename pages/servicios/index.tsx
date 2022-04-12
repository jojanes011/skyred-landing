import React from "react";
import Header from "../../components/Header";
import ServiceSection from "../../components/servicios/ServiceSection";

const marketingServices = [
    { name: "Marketing", image: "/img/icon-marketing.png" },
    { name: "Marketing", image: "/img/icon-marketing.png" },
    { name: "Marketing", image: "/img/icon-marketing.png" },
    { name: "Marketing", image: "/img/icon-marketing.png" },
];

const produccionServices = [
    { name: "Marketing", image: "/img/icon-video.png" },
    { name: "Marketing", image: "/img/icon-video.png" },
    { name: "Marketing", image: "/img/icon-video.png" },
    { name: "Marketing", image: "/img/icon-video.png" },
];

const webServices = [
    { name: "Marketing", image: "/img/icon-web.png" },
    { name: "Marketing", image: "/img/icon-web.png" },
    { name: "Marketing", image: "/img/icon-web.png" },
    { name: "Marketing", image: "/img/icon-web.png" },
];

const Servicios = () => {
    return (
        <div>
            <Header title='SERVICIOS' titleBreadcrumb='Servicios' />
            <div className='flex flex-col'>
                <p className='p-4 md:pb-8 md:pt-16 md:px-48'>
                    En nuestra torre de control trabajamos en pro de la
                    innovación y exclusividad de tu marca para que despegue
                    hasta un espacio lleno de éxito. Te ofrecemos una amplia
                    gama de servicios profesionales que te ayudan a posicionar
                    tu negocio en los medios digitales. A continuación, te
                    contamos todo lo que tenemos para tu entorno empresarial.
                </p>
            </div>
            <ServiceSection
                className='pb-8'
                title='Marketing'
                services={marketingServices}
                fontColor='secondary'
            />
            <ServiceSection
                className='pb-8'
                title='Creación de contenido'
                services={produccionServices}
                fontColor='primary'
            />
            <ServiceSection
                className='pb-16'
                title='Diseño y desarrollo web'
                services={webServices}
                fontColor='secondary'
            />
        </div>
    );
};

export default Servicios;
