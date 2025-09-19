import React from 'react'
import useScreenWidth from '../../hooks/useScreenWidth';

const Footer = () => {

    const isMobile = useScreenWidth() < 768;

    return (
        <footer className="text-xs bg-white text-center py-4">
            {
                isMobile ?
                    (<p>&copy; 2025 Prime Cleaning <br /> Created by Alexandra Campo 💖</p>)
                    :
                    (<p>&copy; 2025 Prime Cleaning | Created by Alexandra Campo 💖</p>)

            }
        </footer>
    )
}

export default Footer
