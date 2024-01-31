import { DeviceCard } from "@/Components/cards/device-card";
import SparkIcon from "../../../../../images/quick-functions-icon_day.svg?react";
import { cn } from "@/lib/utils";
import { usePage } from "@inertiajs/react";
import { useContext, useEffect, useState } from "react";
import { SectionDeviceContext } from "../_context/section-device-context";

const DeviceList = ({ titleOn = true, listClass }) => {
    const { kitchen } = usePage().props;
    const { sections } = kitchen;

    const [devices, setDevices] = useState([]);

    const { sectionType, deviceType } = useContext(SectionDeviceContext);

    useEffect(() => {
        let filteredDevices = [];

        if (sectionType?.eng && sectionType.eng !== "all") {
            const filteredSections = sections.filter(
                (section) => section?.eng === sectionType?.eng
            );
            filteredDevices = filteredSections.flatMap(
                (section) => section?.devices || []
            );
        } else {
            filteredDevices = sections.flatMap(
                (section) => section?.devices || []
            );
        }

        if (deviceType?.value && deviceType.value !== "all") {
            filteredDevices = filteredDevices.filter(
                (device) => device.type === deviceType.value
            );
        }

        setDevices(filteredDevices);
    }, [sectionType, deviceType, sections]);

    return (
        <div className="flex flex-col gap-y-4">
            {titleOn && (
                <div className="flex gap-x-2 text-[20px] leading-5">
                    <SparkIcon />
                    Быстрые функции
                </div>
            )}
            <div className={cn("grid gap-[10px]", listClass ?? null)}>
                {devices &&
                    devices?.length > 0 &&
                    // полученные девайсы с запроса пробегаем через функцию js map, и рендерим карточку для каждого
                    devices?.map((device, idx) => (
                        <DeviceCard key={idx} device={device} />
                        // key обяз параметр когда рендерятся элементы через map
                    ))}
            </div>
        </div>
    );
};

export default DeviceList;
