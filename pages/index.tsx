import type { NextPage } from "next";
import CustomersSay from "../components/index/CustomersSay";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Experience from "../components/index/Experience";
import Services from "../components/index/Services";
import Partners from "../components/index/Partners";
import AboutUs from "../components/index/AboutUs";
import Main from "../components/index/Main";

const fakeDataCustomers = [
    {
        id: 1,
        name: "Erika Sánchez",
        image: "/img/logo-cocovanila.png",
        comment:
            "Muy profesionales, excelente atención, servicio al cliente y gestión del marketing digital. ¡Gracias por hacer parte de nuestro equipo! ",
        rating: 5,
        title: "CEO de Cocovanila Pets",
    },
    {
        id: 2,
        name: "Fernando Bolaños",
        image: "/img/logo-precitop.png",
        comment:
            "la calidad de sus servicios y el acompañamiento constante de todo el equipo ha sido primordial para el éxito de nuestra marca.",
        rating: 5,
        title: "Gerente general de Soluciones Exactas Precitop",
    },
];

const Home: NextPage = () => {
    return (
        <div>
            <Main />
            <AboutUs />
            <Partners />
            <Services />
            <Experience />
            <Carousel autoPlay={true} emulateTouch={true} infiniteLoop={true}>
                {fakeDataCustomers.map((data) => (
                    <CustomersSay key={data.id} {...data}></CustomersSay>
                ))}
            </Carousel>
        </div>
    );
};

export default Home;
