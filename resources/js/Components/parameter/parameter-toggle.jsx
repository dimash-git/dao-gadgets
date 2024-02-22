import { useState, useEffect, useCallback } from "react";

import { Inertia } from "@inertiajs/inertia";

import useMounted from "@/hooks/use-mounted";
import Toggle from "../toggle";

const ParameterToggle = ({ parameter, device }) => {
    const { value } = parameter;

    const isMounted = useMounted();

    const [toggle, setToggle] = useState(Number(value) === 1 ?? 0);

    const toggleHandler = useCallback(() => {
        setToggle((prev) => !prev);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        setToggle(value === 1);
    }, [device.id]);

    useEffect(() => {
        if (!isMounted) return;

        Inertia.patch(route("user.devicevalues.update", parameter.id), {
            ...parameter,
            value: toggle ? 1 : 0,
        });
    }, [toggle, device.id]);

    return (
        <Toggle
            title={"Включение"}
            checked={toggle}
            checkedHandler={toggleHandler}
        />
    );
};

export default ParameterToggle;
