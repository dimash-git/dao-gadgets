import React, { useState } from "react";
import { Link } from "@inertiajs/react";

import { TagIcon } from "@heroicons/react/24/outline";
import ThreeDotsIcon from "@/Components/icons/ThreeDotsIcon";

import Dropdown from "@/Components/Dropdown";
import EditClassForm from "./forms/edit-class-form";

const localization = {
    single: "класс",
};

const Class = ({ deviceClass }) => {
    const [editing, setEditing] = useState(false);

    return (
        <div className="p-6 flex space-x-2">
            <TagIcon className="w-5 h-5" />
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <Link
                            href={route("device-classes.show", deviceClass)}
                            className="ml-1 text-gray-800 text-lg font-semibold underline leading-5 hover:text-purple-600 transition-all"
                        >
                            {deviceClass?.name}
                        </Link>
                    </div>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button>
                                <ThreeDotsIcon />
                            </button>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <button
                                className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"
                                onClick={() => setEditing(true)}
                            >
                                Изменить {localization?.single}
                            </button>
                            <Dropdown.Link
                                as="button"
                                href={route(
                                    "device-classes.destroy",
                                    deviceClass.id
                                )}
                                method="delete"
                            >
                                Удалить
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
                <div className="mt-4">
                    {editing ? (
                        <EditClassForm
                            setEditing={setEditing}
                            deviceClass={deviceClass}
                        />
                    ) : (
                        <div className="space-y-4 text-md text-gray-900">
                            <p>ID: {deviceClass?.id}</p>
                            <p>Название: {deviceClass?.name}</p>
                            <p>Тип: {deviceClass?.type}</p>
                            <p>Описание: {deviceClass?.description}</p>
                            <p>Дивизия: {deviceClass?.division_into_devices}</p>
                            <p>RGB: {deviceClass?.crutch_rgb_backlight}</p>
                            <p>Параметры: {deviceClass?.device_parameters}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Class;
