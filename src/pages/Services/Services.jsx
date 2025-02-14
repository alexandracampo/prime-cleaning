import React from 'react'

const Services = () => {
    return (
        <section id="services" className="py-16 bg-gray-100">
            <h2 className="text-3xl mb-8 text-center">Servicios que ofrecemos</h2>
            <div className="space-y-8">
                <div className="text-center">
                    <h3 className="text-2xl mb-2">Limpieza a Domicilio</h3>
                    <p className="text-lg">Realizamos limpiezas profundas y regulares para tu hogar.</p>
                </div>
                <div className="text-center">
                    <h3 className="text-2xl mb-2">Limpieza de Oficinas</h3>
                    <p className="text-lg">Ofrecemos soluciones de limpieza para tu espacio de trabajo.</p>
                </div>
                <div className="text-center">
                    <h3 className="text-2xl mb-2">Limpieza de Comunidades</h3>
                    <p className="text-lg">Mantenemos en perfecto estado las zonas comunes de tu comunidad.</p>
                </div>
            </div>
        </section>
    )
}

export default Services
