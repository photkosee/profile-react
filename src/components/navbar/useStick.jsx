import { useEffect, useRef, useState } from "react";

const useStick = () => {
    const stickRef = useRef(null);
    const [stick, setStick] = useState(false);
    const [top, setTop] = useState(0);

    useEffect(() => {
        if (!stickRef.current) {
            return;
        }
        setTop(stickRef.current.top);
    }, [stickRef, setTop]);

    useEffect(() => {
        const handleScroll = () => {
            if (!stickRef.current) {
                return;
            }
            setStick(window.screenY >= top);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [setStick, stickRef, top]);
    return { stickRef, stick };
}

export default useStick;
