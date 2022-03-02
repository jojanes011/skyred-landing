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
            <Header title='Servicios' titleBreadcrumb='Servicios' />
            <div className='flex flex-col'>
                <p className='p-4 md:p-16'>
                    En nuestra torre de control trabajamos en pro de la
                    <strong> innovación y exclusividad</strong> de tu marca para
                    que despegue hasta un espacio{" "}
                    <strong> lleno de éxito</strong>. Te ofrecemos una amplia
                    gama de <strong> servicios profesionales</strong> que te
                    ayudan a posicionar tu negocio en los medios digitales. A
                    continuación, te contamos todo lo que tenemos para tu
                    entorno empresarial.
                </p>
            </div>
            <ServiceSection
                title='Marketing'
                services={marketingServices}
                fontColor='#E85A4D'
            />
            <ServiceSection
                title='Creación de contenido'
                services={produccionServices}
                fontColor='#ED915E'
            />
            <ServiceSection
                title='Diseño y desarrollo web'
                services={webServices}
                fontColor='#E85A4D'
            />
        </div>
    );
};

export default Servicios;
