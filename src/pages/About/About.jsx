import React from 'react'
import useSmoothScroll from '../../hooks/useSmoothScroll';
import useScreenWidth from '../../hooks/useScreenWidth';


const About = () => {

    useSmoothScroll();

    const isMobile = useScreenWidth() < 768;

    return (
        <section
            id="about"
            className="h-[calc(100vh)] bg-gray-200 flex flex-col justify-center items-center p-8"
            style={isMobile ? {
                backgroundImage: `url('nosotrosBG.png')`,
                backgroundSize: 'cover',
            } : {}}
        >
            <h2 className="text-base lg:text-4xl md:text-2xl font-bold text-gray-800 mb-12">Sobre Nosotros</h2>
            <p className="lg:text-xl md:text-m text-gray-800 max-w-3xl mb-6 lg:mx-6 md:mx-24">
                Prime Cleaning nació como un negocio familiar con una visión clara: ofrecer servicios de limpieza excepcionales con un trato cercano y profesional.
                Fundada hace más de dos décadas por la familia Pérez, la empresa comenzó con un pequeño equipo apasionado por la limpieza y la satisfacción del cliente.
                Con el tiempo, gracias a la dedicación y el boca a boca de clientes felices, Prime Cleaning creció hasta convertirse en una empresa de referencia en el sector.
            </p>
            <p className="lg:text-xl md:text-m text-gray-800 max-w-3xl lg:mx-6 md:mx-24">
                Lo que nos diferencia es nuestro compromiso con la calidad y la confianza. Cada rincón limpio es un reflejo de nuestro esfuerzo y dedicación.
                Nuestros clientes valoran no solo la impecable limpieza que garantizamos, sino también la calidez de nuestro equipo, que trata cada espacio como si fuera propio.
            </p>
        </section>
    )
}

export default About
