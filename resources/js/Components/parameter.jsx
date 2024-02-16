import { useState, useEffect, useCallback } from "react";

import { Inertia } from "@inertiajs/inertia";

import useDebounce from "@/hooks/use-debounce";
import useMounted from "@/hooks/use-mounted";
import Toggle from "./toggle";
import RangeSlider from "./range-slider";

const Parameter = ({ device, data }) => {
    const isMounted = useMounted();

    const [range, setRange] = useState(Number(data.value) ?? 0);
    const debouncedRange = useDebounce(range, 500);

    const [toggle, setToggle] = useState(Number(data.value) ?? 0);

    const rangeHandler = useCallback((e) => {
        setRange(Number(e.target.value));
    }, []);

    const toggleHandler = useCallback(() => {
        setToggle((prev) => !prev);
    }, []);

    useEffect(() => {
        if (data.deviceclassvalue.front_type === "slider") {
            setRange(data.value);
        } else {
            setToggle(data.value === 1);
        }
    }, [data.value]);

    useEffect(() => {
        if (!isMounted) return;

        Inertia.patch(route("user.devicevalues.update", data.id), {
            ...data,
            value: debouncedRange,
        });
    }, [debouncedRange, device.id]);

    useEffect(() => {
        if (!isMounted) return;

        Inertia.patch(route("user.devicevalues.update", data.id), {
            ...data,
            value: toggle ? 1 : 0,
        });
    }, [toggle, device.id]);

    if (data.deviceclassvalue.front_type === "slider") {
        return (
            <div className="mb-2 w-full pr-4">
                <RangeSlider value={range} onChange={rangeHandler} />
            </div>
        );
    }

    return (
        <Toggle
            title={"Включение"}
            checked={toggle}
            checkedHandler={toggleHandler}
        />
    );
};

export default Parameter;
