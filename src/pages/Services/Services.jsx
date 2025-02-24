import React, { useEffect } from 'react'
import useSmoothScroll from '../../hooks/useSmoothScroll';
import useScreenWidth from '../../hooks/useScreenWidth'

const Services = () => {

    useSmoothScroll()

    const isMobile = useScreenWidth() < 768;

    return (
        <section id="services" className="h-[calc(100vh)] bg-gray-100 grid grid-cols-1 md:grid-cols-2  items-center text-center p-8 md:p-0">

            {/* Sección de imagen */}
            {!isMobile &&
                <div className="flex justify-center h-[calc(100vh)]">
                    <img
                        src="../../../public/limpieza2.jpg"
                        alt="Servicio de limpieza"
                        className="md:w-full max-w-md md:max-w-none shadow-lg object-cover"
                    />
                </div>}

            {/* Resumen de servicios */}
            <div className="grid gap-6 lg:px-10 md:px-10 start-0">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-base font-bold text-gray-800 mb-6 lg:text-2xl md:text-xl">Servicios que ofrecemos</h2>
                    <p className="text-base lg:text-xl md:text-m text-gray-600 mb-6">
                        Ofrecemos varios tipos de servicios pero contacta con nosotros si tienes otras peticiones.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg" >
                    <h3 className="text-base font-semibold text-gray-800 mb-2 lg:text-2xl md:text-xl">Limpieza a Domicilio</h3>
                    <p className="text-base lg:text-xl md:text-m text-gray-600">Realizamos limpiezas profundas y regulares para tu hogar.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-base font-semibold text-gray-800 mb-2 lg:text-2xl md:text-xl">Limpieza de Oficinas</h3>
                    <p className="text-base lg:text-xl md:text-m text-gray-600">Ofrecemos soluciones de limpieza para tu espacio de trabajo.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-base font-semibold text-gray-800 mb-2 lg:text-2xl md:text-xl">Limpieza de Comunidades</h3>
                    <p className="text-base lg:text-xl md:text-m text-gray-600">Mantenemos en perfecto estado las zonas comunes de tu comunidad.</p>
                </div>
            </div>

        </section>
    )
}

export default Services
