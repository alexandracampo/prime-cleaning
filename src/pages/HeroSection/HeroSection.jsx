import React from 'react'

const HeroSection = () => {
    return (
        <section id="home" className="bg-gray-200 text-center py-16">
            <h1 className="text-4xl mb-4">Bienvenido a [Nombre de la Empresa]</h1>
            <p className="text-xl mb-6">Tu empresa de limpieza confiable en Palma</p>
            <a href="#contact" className="bg-blue-500 text-white py-2 px-6 text-lg rounded hover:bg-blue-700">Solicita un presupuesto</a>
        </section>
    )
}

export default HeroSection
