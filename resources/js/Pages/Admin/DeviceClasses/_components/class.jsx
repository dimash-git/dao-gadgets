import React from "react";
import { Link } from "@inertiajs/react";

import ThreeDotsIcon from "@/Components/icons/ThreeDotsIcon";

import Dropdown from "@/Components/Dropdown";

const localization = {
    single: "класс",
};

const Class = ({ deviceClass, setCurrent = null, openModal = null }) => {
    return (
        <>
            <tr className="workarea__table-row">
                <td className="workarea__table-data">{deviceClass?.id}</td>
                <td className="workarea__table-data">
                    <Link
                        href={route("device-classes.show", deviceClass)}
                        className="workarea__table-link"
                    >
                        {deviceClass?.name}
                    </Link>
                </td>
                <td className="workarea__table-data">{deviceClass?.type}</td>
                <td className="workarea__table-data">
                    {deviceClass?.description}
                </td>
                <td className="workarea__table-data">
                    {deviceClass?.division_into_devices}
                </td>
                <td className="workarea__table-data">
                    {deviceClass?.crutch_rgb_backlight}
                </td>
                <td className="workarea__table-data">
                    {deviceClass?.device_parameters}
                </td>
                <td className="workarea__table-data">
                    {deviceClass?.is_service ? "Да" : "Нет"}
                </td>
                <td className="workarea__table-data">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button>
                                <ThreeDotsIcon />
                            </button>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <button
                                className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"
                                onClick={() => {
                                    setCurrent(deviceClass);
                                    openModal();
                                }}
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
                </td>
            </tr>
        </>
    );
};

export default Class;
