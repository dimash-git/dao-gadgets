import { useState, useEffect, useCallback } from "react";

import { Inertia } from "@inertiajs/inertia";

import useDebounce from "@/hooks/use-debounce";
import useMounted from "@/hooks/use-mounted";
import RangeSlider from "../range-slider";

const ParameterSlider = ({ parameter, device }) => {
    const { value } = parameter;

    const isMounted = useMounted();

    const [range, setRange] = useState(Number(value) ?? 0);
    const debouncedRange = useDebounce(range, 500);

    const rangeHandler = useCallback((e) => {
        setRange(Number(e.target.value));
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        setRange(value);
    }, [device.id]);

    useEffect(() => {
        if (!isMounted) return;

        Inertia.patch(route("user.devicevalues.update", parameter.id), {
            ...parameter,
            value: debouncedRange,
        });
    }, [debouncedRange, device.id]);

    return <RangeSlider value={range} onChange={rangeHandler} />;
};

export default ParameterSlider;
