import DeviceCard from "@/Components/cards/device-card";
import SparkIcon from "../../../../images/quick-functions-icon_day.svg?react";
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const DeviceList = ({ titleOn = true, listClass }) => {
    const { kitchen, favorites } = usePage().props;

    const [sections, setSections] = useState(kitchen.sections || []);
    const [favoriteDevices, setFavoriteDevices] = useState([]);

    useEffect(() => {
        const channel = window.Echo.channel("devices");

        const updateDevice = (device, action) => {
            setSections((currentSections) =>
                currentSections.map((section) => {
                    if (section.id !== device.section.id) return section;
                    return {
                        ...section,
                        devices: action(section.devices, device),
                    };
                })
            );
        };

        channel.listen("DeviceCreated", (e) =>
            updateDevice(e.device, (devices, device) => [...devices, device])
        );
        channel.listen("DeviceUpdated", (e) =>
            updateDevice(e.device, (devices, device) =>
                devices.map((d) => (d.id === device.id ? device : d))
            )
        );
        channel.listen("DeviceDeleted", (e) =>
            updateDevice(e.device, (devices, device) =>
                devices.filter((d) => d.id !== device.id)
            )
        );

        return () => {
            channel.stopListening("DeviceCreated");
            channel.stopListening("DeviceUpdated");
            channel.stopListening("DeviceDeleted");
        };
    }, []);

    useEffect(() => {
        const updatedFavoriteDevices = sections.flatMap((section) =>
            section.devices
                .filter((device) => favorites.some((f) => f.id === device.id))
                .map((device) => ({
                    ...device,
                    section: { id: section.id, name: section.name },
                }))
        );

        setFavoriteDevices(updatedFavoriteDevices);
    }, [sections, favorites]);

    return (
        <div className="flex flex-col gap-y-4">
            {titleOn && (
                <div className="flex gap-x-2 text-[20px] leading-5">
                    <SparkIcon />
                    Быстрые функции
                </div>
            )}
            <div className={cn("grid gap-[10px]", listClass ?? null)}>
                {favoriteDevices.map((device, idx) => (
                    <DeviceCard key={idx} device={device} favAllow={false} />
                ))}
            </div>
        </div>
    );
};

export default DeviceList;
