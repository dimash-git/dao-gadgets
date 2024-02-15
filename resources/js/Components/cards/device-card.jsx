import { useState, useEffect, useCallback } from "react";
import DeviceIcon from "../../../images/device-icon_scales.svg";
import FavoriteIcon from "../../../images/favorite-button_remove.svg?react";
import RangeSlider from "../range-slider";
import Toggle from "../ui/toggle";

import useDebounce from "@/hooks/use-debounce";
import { Inertia } from "@inertiajs/inertia";
import useMounted from "@/hooks/use-mounted";

export const DeviceCard = ({ device }) => {
    if (!device) return null;
    const { id, section, order, created_at, updated_at, ...restDevice } =
        device;

    console.log(device);

    const [range, setRange] = useState(device.slider_value);
    const debouncedRange = useDebounce(range, 500);

    const [toggle, setToggle] = useState(device.is_active === 1 ? true : false);
    const isMounted = useMounted();

    const rangeHandler = useCallback((e) => {
        setRange(Number(e.target.value));
    }, []);

    const toggleHandler = useCallback(() => {
        setToggle((prev) => !prev);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        Inertia.patch(route("devices.update", id), {
            ...restDevice,
            slider_value: debouncedRange,
        });
    }, [debouncedRange, device.id]);

    useEffect(() => {
        if (!isMounted) return;

        if (device.type === "backlight") {
            Inertia.patch(route("devices.update", id), {
                ...restDevice,
                is_active: toggle ? 1 : 0,
            });
        }
    }, [toggle, device.id]);

    return (
        <div
            className="min-h-[172px] flex flex-col justify-between rounded-[22px] shadow-[0px_5px_16px_0px_rgba(50,132,229,0.16)] bg-white pt-8 pl-[18px] pr-2 pb-2 bg-no-repeat bg-[100%_0px]"
            style={{ backgroundImage: `url(${device?.icon ?? DeviceIcon})` }}
        >
            <div className="flex flex-col gap-1 max-w-[64px]">
                <span className="text-[14px] leading-4 font-semibold">
                    {device?.device_name}
                </span>
                <span className="text-[12px] leading-3">
                    {device?.section?.name}
                </span>
            </div>
            <div className="flex items-end justify-between">
                {device?.type === "sensor" || device?.type === "tech" ? (
                    <div className="mb-2 w-full pr-4">
                        <RangeSlider value={range} onChange={rangeHandler} />
                    </div>
                ) : (
                    <Toggle
                        title={"Включение"}
                        checked={toggle}
                        checkedHandler={toggleHandler}
                    />
                )}
                <FavoriteIcon className="mb-2 transition text-app-gray hover:text-purple-500 cursor-pointer" />
            </div>
        </div>
    );
};
