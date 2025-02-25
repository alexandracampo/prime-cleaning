import React from 'react'
import { useState, useEffect } from "react";
import useScreenWidth from '../../hooks/useScreenWidth'
import iconMenu from '../../../public/menu.png'
import Menu from './components/menu';

const Navbar = () => {

    const isMobile = useScreenWidth() < 768; // Obtiene el ancho de pantalla
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full pt-3 md:pt-2 bg-white backdrop-blur-md shadow-md z-50 h-24">
            <div className="flex pr-5 justify-between md:items-center px-5">

                {/* imagen */}
                <div className="flex items-center mt-2 md:ml-6 lg:ml-0  ">
                    <img
                        onClick={() => {
                            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        src='../../../public/logo.jpg'
                        className="w-40 md:w-40 lg:w-48 md:mt-2 lg:mt-0" />
                </div>

                {/* Menú navegación */}
                {isMobile &&
                    <>
                        <button className={menuOpen ? 'w-12 hover:cursor-pointer' : 'w-8 hover:cursor-pointer'} onClick={() => setMenuOpen(!menuOpen)}>
                            <img src={menuOpen ? '../../../public/cross.png' : '../../../public/menu.png'} />
                        </button>
                    </>
                }

                {!isMobile && <Menu />}
            </div>

            {menuOpen && (<Menu menuOpen={menuOpen} isMobile={isMobile} setMenuOpen={setMenuOpen} />)}

        </header>



    )
}

export default Navbar
