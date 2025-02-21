import React from 'react'
import { useState, useEffect } from "react";
import useScreenWidth from '../../hooks/useScreenWidth'
import iconMenu from '../../../public/menu.png'

const Navbar = () => {

    const width = useScreenWidth(); // Obtiene el ancho de pantalla
    const isMobile = width < 768; // Define si es móvil
    const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú móvil


    return (
        <header className="fixed top-0 left-0 w-full bg-white backdrop-blur-md shadow-md z-50 p-4 h-24">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between w-full">

                {/* imagen */}
                <div className="flex items-center md:ml-6 lg:ml-0 ">
                    <img src='../../../public/logo.jpg' className="md:w-40 lg:w-48 md:mt-2 lg:mt-0"  ></img>
                </div>

                {/* Menú navegación */}
                {isMobile ?
                    (
                        <button >
                            <img src='../../../public/menu.png' ></img>
                        </button>
                    )
                    :
                    (
                        <nav className='md:mr-10 lg:mr-0'>
                            <ul className="flex space-x-8">
                                <li>
                                    <a
                                        href="#home"
                                        className="text-gray-800 lg:text-lg relative group"
                                    >
                                        Inicio
                                        <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        className="text-gray-800 lg:text-lg relative group"
                                    >
                                        Servicios
                                        <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        className="text-gray-800 lg:text-lg relative group"
                                    >
                                        Sobre Nosotros
                                        <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="text-gray-800lg:text-lg relative group"
                                    >
                                        Contacto
                                        <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    )}
            </div>
        </header>



    )
}

export default Navbar
