import { useEffect, useState } from "react";



export function useFollowWidth(width: number) {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup khi component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isVisible = windowWidth >= width;
    return { isVisible, windowWidth }
}