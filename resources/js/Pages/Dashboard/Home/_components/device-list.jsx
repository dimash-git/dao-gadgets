import { DeviceCard } from "@/Components/cards/device-card";
import SparkIcon from "../../../../../images/quick-functions-icon_day.svg?react";
import { cn } from "@/lib/utils";
import { usePage } from "@inertiajs/react";
import { useContext, useEffect, useState } from "react";
import { SectionDeviceContext } from "../_context/section-device-context";

const DeviceList = ({ titleOn = true, listClass }) => {
    const { kitchen } = usePage().props;

    const [sections, setSections] = useState(kitchen.sections || []);
    console.log(sections);

    const { sectionType, deviceType } = useContext(SectionDeviceContext);

    const devices = sections.reduce((acc, section) => {
        if (
            !sectionType?.eng ||
            sectionType.eng === "all" ||
            section?.eng === sectionType.eng
        ) {
            const filteredDevices =
                section?.devices?.filter(
                    (device) =>
                        !deviceType?.value ||
                        deviceType.value === "all" ||
                        device.type === deviceType.value
                ) || [];
            return acc.concat(filteredDevices);
        }
        return acc;
    }, []);

    // Real-time updates
    useEffect(() => {
        const channel = window.Echo.channel("devices");

        channel.listen("DeviceCreated", (e) => {
            setSections((currentSections) =>
                currentSections.map((section) =>
                    section.id === e.device.section.id
                        ? {
                              ...section,
                              devices: [...section.devices, e.device],
                          }
                        : section
                )
            );
        });

        channel.listen("DeviceUpdated", (e) => {
            setSections((currentSections) =>
                currentSections.map((section) => ({
                    ...section,
                    devices: section.devices.map((device) =>
                        device.id === e.device.id
                            ? { ...device, ...e.device }
                            : device
                    ),
                }))
            );
        });

        channel.listen("DeviceDeleted", (e) => {
            setSections((currentSections) =>
                currentSections.map((section) => ({
                    ...section,
                    devices: section.devices.filter(
                        (device) => device.id !== e.device.id
                    ),
                }))
            );
            console.log("deleted", e);
            console.log(sections, e);
        });

        return () => {
            channel.stopListening("DeviceCreated");
            channel.stopListening("DeviceUpdated");
            channel.stopListening("DeviceDeleted");
        };
    }, []);

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
