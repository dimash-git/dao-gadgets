import { useEffect, useRef } from "react";

function useMounted() {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    return isMounted.current;
}

export default useMounted;
