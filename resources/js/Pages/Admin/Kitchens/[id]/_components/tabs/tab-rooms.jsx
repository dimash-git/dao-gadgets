import { Link, usePage } from "@inertiajs/react";

import { HomeIcon, PowerIcon } from "@heroicons/react/24/solid";

import DevicesTree from "../device/devices-tree";

const TabRooms = () => {
    const { kitchen } = usePage().props;
    const { sections } = kitchen;
    const tree = sections.map((section) => {
        // создаем новую секцию копию из оригинальной чтобы избежать мутацию
        let newSection = { ...section };

        // проверить если секция имеет девайсы
        if (newSection.devices && Array.isArray(newSection.devices)) {
            // меняем название device_name на name
            newSection.children = newSection.devices.map((device) => {
                return { ...device, name: device.device_name };
            });
        }

        return newSection;
    });

    return (
        <div className="p-4 mt-8 space-y-4 rounded-xl">
            <div className="flex space-x-2 font-bold">
                <HomeIcon className="h-5 w-5" />
                <span> {kitchen?.name}</span>
            </div>
            <ul>
                <Link
                    href={route("kitchens.sections", {
                        kitchen: kitchen.id,
                    })}
                    className="flex space-x-2 items-center hover:text-purple-500 transition-all"
                >
                    <PowerIcon className="h-5 w-5" />
                    <span className="underline">Все секции</span>
                </Link>
                {sections?.length > 0 && <DevicesTree tree={tree} />}
            </ul>
        </div>
    );
};

export default TabRooms;
