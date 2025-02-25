import React, { useEffect } from 'react'
import useSmoothScroll from '../../hooks/useSmoothScroll';
import useScreenWidth from '../../hooks/useScreenWidth';

const ContactForm = () => {

    useSmoothScroll();

    const isMobile = useScreenWidth() < 768;

    return (
        <section
            id="contact"
            className="h-[calc(100vh-7rem)] bg-gray-100 grid grid-cols-1 md:grid-cols-2 items-center text-center"
            style={isMobile ? {
                backgroundImage: `url('contactBG.png')`,
                backgroundSize: 'cover',
            } : {}}
        >
            {!isMobile &&
                <div className="flex justify-center">
                    <img
                        src='contact.jpg'
                        alt="Servicio de limpieza"
                        className="h-[calc(100vh-7rem)] w-3/4 md:w-full max-w-md md:max-w-none  shadow-lg object-cover"
                    ></img>
                </div>}

            <div>
                <h2 className="text-2xl lg:text-4xl md:text-2xl font-bold text-gray-800text-3xl mb-20 text-center">Contáctanos</h2>
                <form className="max-w-lg mx-auto space-y-6">
                    <label htmlFor="name" className="block lg:text-xl md:text-m">Nombre</label>
                    <input type="text" id="name" name="name" className="w-[80%] lg:w-full md:w-l p-4 border border-gray-300 rounded bg-amber-50" required />

                    <label htmlFor="email" className="block lg:text-xl md:text-m">Correo Electrónico</label>
                    <input type="email" id="email" name="email" className="w-[80%] lg:w-full md:w-l p-4 border border-gray-300 rounded bg-amber-50" required />

                    <label htmlFor="message" className="block lg:text-xl md:text-m">Mensaje</label>
                    <textarea id="message" name="message" className="w-[80%] lg:w-full md:w-l p-6 border border-gray-300 rounded bg-amber-50" required />

                    <button type="submit" className="bg-yellow-500 text-white py-2 px-6 lg:text-xl md:text-m rounded hover:bg-yellow-700 hover:cursor-pointer">Enviar Mensaje</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm
