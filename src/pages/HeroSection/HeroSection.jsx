import React, { useEffect } from 'react'
import useSmoothScroll from '../../hooks/useSmoothScroll';

const HeroSection = () => {

    useSmoothScroll();

    return (
        <section id="home" className="h-[calc(100vh)] bg-gray-200 grid grid-cols-1 md:grid-cols-2 items-center text-center ">

            {/* Sección de texto */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left px-20 max-w-[40vw]">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido a Prime Cleaning</h1>
                <p className="text-xl text-gray-600 mb-6">
                    Tu empresa de limpieza de confianza, comprometida con la excelencia y el cuidado de cada detalle. Con un equipo profesional y productos de alta calidad, garantizamos espacios impecables para tu hogar o negocio. Déjanos encargarnos de la limpieza, tú solo disfruta del resultado.
                </p>
                <a href="#contact" className="bg-yellow-500 text-white py-3 px-6 text-lg rounded-lg shadow-md hover:bg-yellow-700 transition">
                    Solicita un presupuesto
                </a>
            </div>

            {/* Sección de imagen */}
            <div className="flex justify-center h-[calc(100vh)]">
                <img
                    src="../../../public/limpieza9.jpg"
                    alt="Servicio de limpieza"
                    className="w-3/4 md:w-full max-w-md md:max-w-none max-h-[100vh]  shadow-lg object-cover"
                />
            </div>
        </section>

    )
}

export default HeroSection
