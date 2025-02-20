import { useEffect } from "react";

const useSmoothScroll = () => {
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        let isScrolling = false;

        const handleScroll = (event) => {
            if (isScrolling) return;
            isScrolling = true;

            setTimeout(() => {
                isScrolling = false;
            }, 800); // Ajusta el tiempo para mayor suavidad

            const direction = event.deltaY > 0 ? 1 : -1;
            const currentIndex = [...sections].findIndex(
                (section) => section.getBoundingClientRect().top >= 0
            );

            let nextIndex = currentIndex + direction;
            if (nextIndex >= 0 && nextIndex < sections.length) {
                sections[nextIndex].scrollIntoView({ behavior: "smooth" });
            }
        };

        document.addEventListener("wheel", handleScroll, { passive: false });

        return () => document.removeEventListener("wheel", handleScroll);
    }, []);
};

export default useSmoothScroll;
