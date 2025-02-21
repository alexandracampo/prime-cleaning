import React, { useEffect } from 'react'
import useSmoothScroll from '../../hooks/useSmoothScroll';

const Services = () => {

    useSmoothScroll();

    return (
        <section id="services" className="h-[calc(100vh)] bg-gray-100 grid grid-cols-2 items-center text-center ">

            {/* Sección de imagen */}
            <div className="flex justify-center h-[calc(100vh)]">
                <img
                    src="../../../public/limpieza2.jpg"
                    alt="Servicio de limpieza"
                    className="w-1/2 md:w-full max-w-md md:max-w-none shadow-lg object-cover"
                />
            </div>

            {/* Resumen de servicios */}
            <div className="grid gap-6 text-left lg:px-10 md:px-6 start-0">
                <div className="flex flex-col items-center md:items-start text-center md:text-left px-10 max-w-[40vw]">
                    <h2 className="font-bold text-gray-800 mb-6 lg:text-2xl md:text-xl">Servicios que ofrecemos</h2>
                    <p className="lg:text-xl md:text-m text-gray-600 mb-6">
                        Ofrecemos varios tipos de servicios pero contacta con nosotros si tienes otras peticiones.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg" >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2 lg:text-2xl md:text-xl">Limpieza a Domicilio</h3>
                    <p className="lg:text-xl md:text-m text-gray-600">Realizamos limpiezas profundas y regulares para tu hogar.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2 lg:text-2xl md:text-xl">Limpieza de Oficinas</h3>
                    <p className="lg:text-xl md:text-m text-gray-600">Ofrecemos soluciones de limpieza para tu espacio de trabajo.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2 lg:text-2xl md:text-xl">Limpieza de Comunidades</h3>
                    <p className="lg:text-xl md:text-m text-gray-600">Mantenemos en perfecto estado las zonas comunes de tu comunidad.</p>
                </div>
            </div>
        </section>
    )
}

export default Services
