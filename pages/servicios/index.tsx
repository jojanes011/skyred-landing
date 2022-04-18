import React from "react";
import Header from "../../components/Header";
import ServiceSection from "../../components/servicios/ServiceSection";

const marketingServices = [
    { name: "Campañas Publicitarias", image: "/img/icons/marketing/campanas-publicitarias.png" },
    { name: "Email Marketing", image: "/img/icons/marketing/email-marketing.png" },
    { name: "Marketing en Medios Digitales", image: "/img/icons/marketing/medios-digitales.png" },
    { name: "Reputación Online", image: "/img/icons/marketing/reputacion-online.png" },
    { name: "Gestión y Administración de RRSS", image: "/img/icons/marketing/rrss.png" },
];

const produccionServices = [
    { name: "Branding", image: "/img/icons/creacion-contenido/branding.png" },
    { name: "Copywrite", image: "/img/icons/creacion-contenido/copywrite.png" },
    { name: "Diseño Gráfico", image: "/img/icons/creacion-contenido/diseno-grafico.png" },
    { name: "Fotografía", image: "/img/icons/creacion-contenido/fotografia.png" },
    { name: "Videografía", image: "/img/icons/creacion-contenido/videografia.png" },
];

const webServices = [
    { name: "Ecommerce", image: "/img/icons/web/ecommerce.png" },
    { name: "Landing Page", image: "/img/icons/web/landing.png" },
    { name: "Página Estándar", image: "/img/icons/web/estandar.png" },
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
