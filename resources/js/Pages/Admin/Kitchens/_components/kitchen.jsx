import React, { useState } from "react";
import { Link } from "@inertiajs/react";

import { HomeIcon } from "@heroicons/react/24/solid";
import ThreeDotsIcon from "@/Components/icons/ThreeDotsIcon";

import Dropdown from "@/Components/Dropdown";
import EditKitchenForm from "./forms/edit-kitchen-form";

const Kitchen = ({ kitchen, kitchens }) => {
    const [editing, setEditing] = useState(false);

    return (
        <div className="p-6 flex space-x-2">
            <HomeIcon className="h-5 w-5" />

            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <Link
                            href={route("kitchens.show", kitchen)}
                            className="ml-1 text-gray-800 text-lg font-semibold underline leading-5 hover:text-purple-600 transition-all"
                        >
                            {kitchen?.name}
                        </Link>
                    </div>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button>
                                <ThreeDotsIcon />
                            </button>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Link
                                as="button"
                                href={route("kitchens.show", kitchen)}
                            >
                                Посмотреть Дом
                            </Dropdown.Link>
                            <button
                                className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"
                                onClick={() => setEditing(true)}
                            >
                                Изменить
                            </button>
                            <Dropdown.Link
                                as="button"
                                href={route("kitchens.destroy", kitchen.id)}
                                method="delete"
                            >
                                Удалить
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>

                <div className="mt-4">
                    {editing ? (
                        <EditKitchenForm
                            setEditing={setEditing}
                            kitchen={kitchen}
                            kitchens={kitchens}
                        />
                    ) : (
                        <div className="space-y-2 text-sm text-gray-900">
                            <p>ID: {kitchen?.id}</p>
                            <p>Название: {kitchen?.name}</p>
                            <p>Номер договора: {kitchen?.contract_number}</p>
                            <p>Адрес: {kitchen?.address}</p>
                            <p>Версия прошивки: {kitchen?.firmware_version}</p>
                            <p>MQTT префикс: {kitchen?.mqtt_prefix}</p>
                            <p>
                                Настройки адресной ленты (json):&nbsp;
                                {kitchen?.settings_addrledstrip}
                            </p>
                            <p>
                                Настройки кнопок (json):{" "}
                                {kitchen?.settings_button}
                            </p>
                            <p>
                                Настройки main платы (json):&nbsp;
                                {kitchen?.settings_general}
                            </p>
                            <p>
                                Настройки мосфетов (json):&nbsp;
                                {kitchen?.settings_mosfet}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Kitchen;
