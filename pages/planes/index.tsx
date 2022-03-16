import React from "react";
import Header from "../../components/Header";

const Planes = () => {
    return (
        <div>
            <Header title='PLANES' titleBreadcrumb='PLANES' />
            <div className='flex flex-col'>
                <p className='px-4 md:px-32 py-4 md:py-16'>
                    Hemos diseñado <strong>3 tipos de planes</strong> para
                    nuestros viajeros que son{" "}
                    <strong>100% personalizables</strong> porque sabemos que
                    todas las marcas tienen necesidades diferentes. Conoce a
                    continuación <strong>lo que incluye cada uno,</strong> si
                    tienes alguna duda contáctanos de inmediato para{" "}
                    <strong>brindarte una asesoría integral</strong> y planear
                    el día de despegue para que tu marca llegue a un espacio{" "}
                    <strong>lleno de éxito.</strong>
                </p>
                <SectionPlan
                    title='MARKETING'
                    description='Para cumplir con los objetivos estratégicos de tu marca, es importante <strong>crear contenido que genere valor e interacción con tu audiencia o público objetivo.</strong> A continuación, te presentamos tres planes diferentes para el diseño y gestión del contenido de tus redes sociales.'
                    cards={[
                        {
                            title: "BASICO",
                            background: "bg-plan_1",
                            popular: false,
                            url: "/",
                            lines: [
                                "Línea de diseño de la marca.",
                                "12 piezas gráficas opcionales entre historias o post.",
                                "2 reel de 15 segundos en formato vertical.",
                                "Copy creativo con hashtags para cada una de las piezas gráficas.",
                                "Publicación de las piezas en Facebook e Instagram (sujeto a la preferencia del cliente).",
                                "Acompañamiento constante y personalizado de todo el equipo de Sky Red (Community Manager, Coordinador comercial y coordinador de cuenta).",
                            ],
                        },
                        {
                            title: "EMPRENDEDOR",
                            popular: true,
                            background: "bg-plan_2",
                            url: "/",
                            lines: [
                                "Línea de diseño de la marca.",
                                "18 piezas gráficas opcionales entre historias o post.",
                                "2 reel de 15 segundos en formato vertical.",
                                "Copy creativo con hashtags para cada una de las piezas gráficas.",
                                "Diseño de 4 portadas de historias destacadas con ícono para instagram.",
                                "Diseño de portada para la fanpage de facebook.",
                                "Publicación de las piezas en Facebook e Instagram (sujeto a la preferencia del cliente).",
                                "Acompañamiento constante y personalizado de todo el equipo de Sky Red (Community Manager, Coordinador comercial y coordinador de cuenta).",
                            ],
                        },
                        {
                            title: "PREMIUM",
                            background: "bg-plan_3",
                            popular: false,
                            url: "/",
                            lines: [
                                "Línea de diseño de la marca.",
                                "24 piezas gráficas opcionales entre historias o post.",
                                "2 reel de 15 segundos en formato vertical.",
                                "Copy creativo con hashtags para cada una de las piezas gráficas.",
                                "Diseño de 6 portadas de historias destacadas con ícono para instagram.",
                                "Diseño de portada para la fanpage de facebook.",
                                "1 video para post de máximo 30 segundos.",
                                "Publicación de las piezas en Facebook e Instagram (sujeto a la preferencia del cliente).",
                                "Acompañamiento constante y personalizado de todo el equipo de Sky Red (Community Manager, Coordinador comercial y coordinador de cuenta).",
                            ],
                        },
                    ]}
                />
                <SectionPlan
                    title='DESARROLLO WEB'
                    description='Sin importar el tamaño o tipo de empresa, tener un sitio web se ha convertido en una catapulta para <strong>aumentar el alcance, posicionamiento y las ventas de tu negocio.</strong> Conoce las diferentes opciones que te ofrecemos para diseñar y desarrollar tu sitio web de alta calidad.'
                    cards={[
                        {
                            title: "LANDING PAGE",
                            background: "bg-plan_1",
                            popular: false,
                            url: "/",
                            lines: [
                                "Diseño y desarrollo web de la página.",
                                "Optimización SEO de la página.",
                                "Responsive para móvil, tableta y escritorio.",
                                "Integración de redes sociales y botón de WhatsApp.",
                                "Formulario de suscripción y contacto.",
                                "1 página con máximo 8 bloques de contenido.",
                                "Redacción del contenido.",
                                "Soporte técnico y actualización durante 1 mes.",
                            ],
                        },
                        {
                            title: "ESTANDAR",
                            popular: false,
                            background: "bg-plan_2",
                            url: "/",
                            lines: [
                                "Diseño y desarrollo web de la página.",
                                "Optimización SEO de la página.",
                                "Responsive para móvil, tableta y escritorio.",
                                "Integración de redes sociales y botón de WhatsApp.",
                                "Formulario de suscripción y contacto.",
                                "3 páginas con máximo 6 bloques de contenido.",
                                "Redacción del contenido.",
                                "Soporte técnico y actualización durante 2 mes.",
                            ],
                        },
                        {
                            title: "E-COMMERCE",
                            background: "bg-plan_3",
                            popular: false,
                            url: "/",
                            lines: [
                                "Diseño y desarrollo web de la página.",
                                "Optimización SEO de la página.",
                                "Responsive para móvil, tableta y escritorio.",
                                "Integración de redes sociales y botón de WhatsApp.",
                                "Formulario de suscripción y contacto.",
                                "6 páginas internas con tienda y redacción.",
                                "Pasarela de pagos (según el país).",
                                "5 productos de prueba subidos a la tienda.",
                                "App móvil para la administración y gestión de pedidos.",
                                "Manejo de inventarios, facturación, pedidos, informes, etc.",
                            ],
                        },
                    ]}
                />
                <SectionPlan
                    title='BRANDING'
                    description='Definir un <strong>branding con exclusividad, innovación e impacto</strong> es fundamental para posicionar tu marca en los medios digitales. Para ello, <strong>te ofrecemos 2 planes</strong> para la construcción de tu identidad de marca.'
                    cards={[
                        {
                            title: "BASICO",
                            background: "bg-plan_1",
                            popular: false,
                            url: "/",
                            lines: [
                                "Diseño del logo responsive y exclusivo.",
                                "Brandboard con variaciones del logo, paleta de colores, tipografías, íconos e imagen de marca.",
                                "Algunos mockups representativos para la marca.",
                                "Asesoría y acompañamiento personalizado de todo el equipo de Sky Red.",
                            ],
                        },
                        {
                            title: "ESTANDAR",
                            popular: false,
                            background: "bg-plan_2",
                            url: "/",
                            lines: [
                                "Diseño del logo responsive y exclusivo.",
                                "Brandboard con variaciones del logo, paleta de colores, tipografías, íconos e imagen de marca.",
                                "Algunos mockups representativos para la marca.",
                                "Copy creativo para la descripción de la biografía.",
                                "Configuración de contacto y link de RRSS.",
                                "Diseño de 5 historias destacadas con ícono.",
                                "Asesoría y acompañamiento personalizado de todo el equipo de Sky Red.",
                            ],
                        },
                    ]}
                />
            </div>
        </div>
    );
};

interface SectionPlanInterface {
    title: string;
    description: string;
    cards: Array<any>;
}

const SectionPlan = ({
    title = "",
    description = "",
    cards = [],
}: SectionPlanInterface) => (
    <div className='flex flex-col space-y-8 items-center px-4 md:px-32 mt-8'>
        <h2 className='title'>{title}</h2>
        <p dangerouslySetInnerHTML={{__html: description}} />
        <div
            className={
                "flex flex-col lg:flex-row space-x-0 space-y-8 lg:space-y-0 lg:space-x-8 py-8 " +
                (cards.length <= 2 ? "lg:w-2/3" : "w-full")
            }>
            {cards.map((card) => (
                <div
                    key={card.title}
                    className='flex flex-col items-center text-center rounded-lg shadow-2xl'>
                    {card.popular ? (
                        <div className='text-center py-1'>
                            <h6 className='uppercase subtitle'>más popular</h6>
                        </div>
                    ) : (
                        <></>
                    )}
                    <div
                        className={
                            "w-full flex flex-col justify-center items-center space-y-2 px-8 py-20 rounded-lg text-white bg-cover " +
                            card.background
                        }>
                        <h5 className='text-2xl'>PLAN</h5>
                        <h4 className='text-3xl font-extrabold'>
                            {card.title}
                        </h4>
                        <button
                            type='button'
                            className='btn-transparent w-1/2 px-4'>
                            LO QUIERO
                        </button>
                    </div>
                    <div className='flex flex-col space-y-4 px-8 py-4 justify-center text-left'>
                        {card.lines.map((line: string) => (
                            <div key={line} className='flex flex-row space-x-2'>
                                <i className='fas fa-circle text-primary mt-1' />
                                <label className='text-sm'>{line}</label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Planes;
