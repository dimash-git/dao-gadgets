import { cn } from "@/lib/utils";
import { useContext, useEffect } from "react";
import AllIcon from "../../../../../images/section-icon_all.svg?react";
import SensorIcon from "../../../../../images/section-icon_sensors.svg?react";
import DoorsIcon from "../../../../../images/section-icon_doors.svg?react";
import LightIcon from "../../../../../images/section-icon_light.svg?react";
import AppliancesIcon from "../../../../../images/section-icon_appliances.svg?react";

import { deviceTypes } from "@/constants/device";
import { SectionDeviceContext } from "../_context/section-device-context";
import { usePage } from "@inertiajs/react";

const icons = [SensorIcon, DoorsIcon, LightIcon, AppliancesIcon, SensorIcon];

const deviceTypesWithIcons = deviceTypes.map((typeObj, index) => {
    return { ...typeObj, icon: icons[index], slug: typeObj.value };
});

const types = [
    { name: "Все", slug: "all", icon: AllIcon },
    ...deviceTypesWithIcons,
];

const DeviceType = ({ type, selected, setSelected }) => {
    return (
        <div className="flex flex-col gap-y-2 items-center">
            <button
                onClick={() => setSelected(type)}
                className={cn(
                    "flex items-center justify-center outline-none border-none h-14 w-14 rounded-[10px] shadow-app-blue text-[14px] leading-4 text-app-gray",
                    selected?.slug === type?.slug
                        ? "blue-gradient text-white border-transparent"
                        : null
                )}
            >
                {type?.icon && <type.icon />}
            </button>
            <span className="text-[12px] leading-3">{type?.name}</span>
        </div>
    );
};

const DeviceTypeList = () => {
    const { deviceType, setDeviceType } = useContext(SectionDeviceContext);

    useEffect(() => {
        setDeviceType(types[0]);
    }, []);
    return (
        <div className="w-full flex gap-x-2">
            {types.length > 0 &&
                types.map((type, idx) => (
                    <DeviceType
                        key={idx}
                        type={type}
                        setSelected={setDeviceType}
                        selected={deviceType}
                    />
                ))}
        </div>
    );
};

export default DeviceTypeList;
