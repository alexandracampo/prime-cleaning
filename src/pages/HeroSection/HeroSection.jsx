import React, { useEffect } from 'react'
import useSmoothScroll from '../../hooks/useSmoothScroll';
import useScreenWidth from '../../hooks/useScreenWidth';

const HeroSection = () => {

    useSmoothScroll();

    const isMobile = useScreenWidth() < 768;

    return (
        <section
            id="home"
            className="h-[calc(100vh)] bg-gray-200 grid grid-cols-1 md:grid-cols-2 items-center text-center"
        >

            {/* Sección de imagen */}
            {isMobile ? (
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('../../../public/mobileBG.png')`,
                    }}
                />
            ) : (

                <div className="flex justify-center h-[calc(100vh)]">
                    <img
                        src="../../../public/limpieza9.jpg"
                        alt="Servicio de limpieza"
                        className="w-3/4 md:w-full max-w-md md:max-w-none max-h-[100vh]  shadow-lg object-cover"
                    />
                </div>
            )

            }


            {/* Sección de texto */}
            <div className="flex flex-col items-start text-left px-20 z-10">
                <h1 className="text-base lg:text-4xl md:text-2xl font-bold text-gray-700 mb-4">Bienvenido a Prime Cleaning</h1>
                <p className="text-base leading-[2] lg:text-xl md:text-m text-gray-700 mb-6">
                    Tu empresa de limpieza de confianza, comprometida con la excelencia y el cuidado de cada detalle. Con un equipo profesional y productos de alta calidad, garantizamos espacios impecables para tu hogar o negocio. Déjanos encargarnos de la limpieza, tú solo disfruta del resultado.
                </p>
                <a href="#contact" className="text-sm p-2 bg-yellow-500 text-white lg:py-3 md:py-2 lg:px-6 md:px-4 lg:text-lg md:text-m rounded-lg shadow-md hover:bg-yellow-700 transition">
                    Solicita un presupuesto
                </a>
            </div>

            {/* Sección de imagen */}
            {/* {!isMobile &&
                <div className="flex justify-center h-[calc(100vh)]">
                    <img
                        src="../../../public/limpieza9.jpg"
                        alt="Servicio de limpieza"
                        className="w-3/4 md:w-full max-w-md md:max-w-none max-h-[100vh]  shadow-lg object-cover"
                    />
                </div>} */}
        </section>

    )
}

export default HeroSection
