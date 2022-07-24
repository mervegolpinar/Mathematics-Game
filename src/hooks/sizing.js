import { useState, useEffect } from 'react';

export default function useSizing() {
    const [size, setSize] = useState([0,0]);
    
    const updateSize = () => {
        setSize([window.innerWidth, window.innerHeight]);
    }

    useEffect(() => {
        updateSize();
        window.addEventListener('resize' , updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, [])

    return size;
}