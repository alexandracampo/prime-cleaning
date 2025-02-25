import React from 'react'

const Menu = ({ menuOpen, isMobile, setMenuOpen }) => {

    return (
        <>
            <nav
                className={`bg-white z-40 p-4 
                ${isMobile ? (menuOpen ? "opacity-70 w-full pt-8 pr-5" : "top-40 opacity-0") : "relative opacity-100 top-0 flex justify-end"}`}
            >
                <ul
                    className={`flex ${isMobile ? "flex-col items-end" : "space-x-8"}`}
                >
                    <li>
                        <a
                            href="#home"
                            className="text-gray-800 lg:text-lg relative group"
                            onClick={() => setMenuOpen(false)}
                        >
                            Inicio
                            <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="text-gray-800 lg:text-lg relative group"
                            onClick={() => setMenuOpen(false)}
                        >
                            Servicios
                            <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-gray-800 lg:text-lg relative group"
                            onClick={() => setMenuOpen(false)}
                        >
                            Sobre Nosotros
                            <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-gray-800 lg:text-lg relative group"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contacto
                            <span className="absolute left-0 bottom-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu

