import React from 'react'

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white backdrop-blur-md shadow-md z-50 p-4 h-24">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between w-full">

                <div className="flex items-center ml-4">
                    <img src='../../../public/logo.jpg' className="text-xl font-semibold ml-3 w-48"  ></img>
                </div>

                <nav>
                    <ul className="flex space-x-8 text-sm">
                        <li>
                            <a
                                href="#home"
                                className="text-gray-800 text-lg relative group"
                            >
                                Inicio
                                <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="text-gray-800 text-lg relative group"
                            >
                                Servicios
                                <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-gray-800 text-lg relative group"
                            >
                                Sobre Nosotros
                                <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-gray-800 text-lg relative group"
                            >
                                Contacto
                                <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>


    )
}

export default Navbar
