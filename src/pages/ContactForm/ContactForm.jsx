import React, { useEffect } from 'react'
import useSmoothScroll from '../../hooks/useSmoothScroll';

const ContactForm = () => {

    useSmoothScroll();

    return (
        <section id="contact" className="h-[calc(100vh-7rem)] bg-gray-100 grid grid-cols-1 md:grid-cols-2 items-center text-center">
            <div className="flex justify-center">
                <img
                    src="../../../public/contact.jpg"
                    alt="Servicio de limpieza"
                    className="h-[calc(100vh-7rem)] w-3/4 md:w-full max-w-md md:max-w-none  shadow-lg object-cover"
                ></img>
            </div>

            <div>
                <h2 className="text-3xl mb-6 text-center">Contáctanos</h2>
                <form className="max-w-lg mx-auto space-y-6">
                    <label htmlFor="name" className="block text-lg">Nombre</label>
                    <input type="text" id="name" name="name" className="w-full p-4 border border-gray-300 rounded" required />

                    <label htmlFor="email" className="block text-lg">Correo Electrónico</label>
                    <input type="email" id="email" name="email" className="w-full p-4 border border-gray-300 rounded" required />

                    <label htmlFor="message" className="block text-lg">Mensaje</label>
                    <textarea id="message" name="message" className="w-full p-4 border border-gray-300 rounded" required></textarea>

                    <button type="submit" className="bg-yellow-500 text-white py-2 px-6 text-lg rounded hover:bg-yellow-700 hover:cursor-pointer">Enviar Mensaje</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm
