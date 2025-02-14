import React from 'react'

const Navbar = () => {
    return (
        <header className="bg-white py-50">
            <nav>
                <ul className="flex justify-around flex-row">
                    <li><a href="#home" className="text-gray text-lg font-roboto hover:scale-125">Inicio</a></li>
                    <li><a href="#services" className="text-gray-800 text-lg font-roboto  hover:scale-105 transition-all duration-200">Servicios</a></li>
                    <li><a href="#about" className="text-gray-800 text-lg font-roboto hover:scale-105 transition-all duration-200">Sobre Nosotros</a></li>
                    <li><a href="#contact" className="text-gray-800 text-lg font-roboto hover:scale-105 transition-all duration-200">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
