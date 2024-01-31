import { cn } from "@/lib/utils";
import { useState } from "react";
import AllIcon from "../../../../images/section-icon_all.svg?react";
import SensorIcon from "../../../../images/section-icon_sensors.svg?react";
import DoorsIcon from "../../../../images/section-icon_doors.svg?react";
import LightIcon from "../../../../images/section-icon_light.svg?react";
import AppliancesIcon from "../../../../images/section-icon_appliances.svg?react";

const deviceTypes = [
    { name: "Все", slug: "all", icon: AllIcon },
    { name: "Датчики", slug: "sensors", icon: SensorIcon },
    { name: "Двери", slug: "doors", icon: DoorsIcon },
    { name: "Подсветка", slug: "light", icon: LightIcon },
    { name: "Техника", slug: "appliances", icon: AppliancesIcon },
    { name: "Другое", slug: "other", icon: SensorIcon },
];

const DeviceType = ({ deviceType, selected, setSelected }) => {
    return (
        <div className="flex flex-col gap-y-2 items-center">
            <button
                onClick={() => setSelected(deviceType?.slug)}
                className={cn(
                    "flex items-center justify-center outline-none border-none h-14 w-14 rounded-[10px] shadow-app-blue text-[14px] leading-4 text-app-gray",
                    selected === deviceType?.slug
                        ? "blue-gradient text-white border-transparent"
                        : null
                )}
            >
                {deviceType?.icon && <deviceType.icon />}
            </button>
            <span className="text-[12px] leading-3">{deviceType?.name}</span>
        </div>
    );
};

const DeviceTypeList = () => {
    const [selected, setSelected] = useState("all");

    return (
        <div className="w-full flex gap-x-2">
            {deviceTypes.length > 0 &&
                deviceTypes.map((deviceType, idx) => (
                    <DeviceType
                        key={idx}
                        deviceType={deviceType}
                        setSelected={setSelected}
                        selected={selected}
                    />
                ))}
        </div>
    );
};

export default DeviceTypeList;
