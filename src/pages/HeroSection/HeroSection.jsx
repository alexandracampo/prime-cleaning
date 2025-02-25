import React, { useEffect } from 'react'
import useSmoothScroll from '../../hooks/useSmoothScroll';
import useScreenWidth from '../../hooks/useScreenWidth';
import { motion } from "framer-motion";

const HeroSection = () => {

    useSmoothScroll();

    const isMobile = useScreenWidth() < 768;

    const images = [
        "limpieza9.jpg",
        "limpieza1.jpg",
        "limpieza2.jpg",
        "limpieza8.jpg",
        "limpieza3.jpg",
        "limpieza4.jpg",
        "limpieza5.jpg",
        "limpieza7.jpg",
        "limpieza10.jpg",
    ];

    return (
        <>
            <section
                id="home"
                className="h-[calc(100vh)] bg-gray-200 grid grid-cols-1 md:grid-cols-2 items-center text-center"
            >
                {/* Sección de imagen */}
                {!isMobile &&
                    <>
                        < div className="flex justify-center h-[calc(100vh)]">
                            <img
                                src="limpieza9.jpg"
                                alt="Servicio de limpieza"
                                className="w-3/4 md:w-full max-w-md md:max-w-none max-h-[100vh] shadow-lg object-cover"
                                loading="lazy"
                            />
                        </div>
                    </>
                }

                {/* Sección de texto */}
                <div className="flex flex-col items-center text-center px-10 md:items-start lg:items-start md:text-left lg:text-left md:px-20 lg:px-20 z-10 pt-36">
                    <h1 className="text-sm lg:text-4xl md:text-2xl font-bold text-gray-700 mb-4">Bienvenido a Prime Cleaning</h1>
                    <p className="text-sm lg:text-xl md:text-m text-gray-700 mb-6">
                        Tu empresa de limpieza de confianza, comprometida con la excelencia y el cuidado de cada detalle. Con un equipo profesional y productos de alta calidad, garantizamos espacios impecables para tu hogar o negocio. Déjanos encargarnos de la limpieza, tú solo disfruta del resultado.
                    </p>
                    <a href="#contact" className="text-sm p-2 bg-yellow-500 text-white lg:py-3 md:py-2 lg:px-6 md:px-4 lg:text-lg md:text-m rounded-lg shadow-md hover:bg-yellow-700 transition">
                        Solicita un presupuesto
                    </a>
                </div>

                {/* Animación imágenes en versión movil */}
                {isMobile &&
                    <div className="w-full overflow-hidden relative p-5">
                        <motion.div
                            className="flex cursor-grab"
                            drag="x"
                            dragConstraints={{ right: 0, left: -(images.length * 260) }}
                        >
                            {images.map((src, index) => (
                                <motion.div
                                    key={index}
                                    className="min-w-[120px] mx-2 p-1 bg-white rounded-lg shadow-lg"
                                    whileTap={{ scale: 0.5 }}
                                >
                                    <img src={src} alt={`Limpieza ${index + 1}`} className="rounded-lg" loading="lazy" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>}
            </section >
        </>
    )
}

export default HeroSection
