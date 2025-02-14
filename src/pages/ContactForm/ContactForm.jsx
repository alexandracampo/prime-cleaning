import React from 'react'

const ContactForm = () => {
    return (
        <section id="contact" className="py-16 bg-gray-200">
            <h2 className="text-3xl mb-6 text-center">Contáctanos</h2>
            <form className="max-w-lg mx-auto space-y-6">
                <label htmlFor="name" className="block text-lg">Nombre</label>
                <input type="text" id="name" name="name" className="w-full p-4 border border-gray-300 rounded" required />

                <label htmlFor="email" className="block text-lg">Correo Electrónico</label>
                <input type="email" id="email" name="email" className="w-full p-4 border border-gray-300 rounded" required />

                <label htmlFor="message" className="block text-lg">Mensaje</label>
                <textarea id="message" name="message" className="w-full p-4 border border-gray-300 rounded" required></textarea>

                <button type="submit" className="bg-green-500 text-white py-2 px-6 text-lg rounded hover:bg-green-700">Enviar Mensaje</button>
            </form>
        </section>
    )
}

export default ContactForm
