import React from "react";
import { Link } from "@inertiajs/react";

import ThreeDotsIcon from "@/Components/icons/ThreeDotsIcon";

import Dropdown from "@/Components/Dropdown";

const Kitchen = ({ kitchen, setCurrent = null, openModal = null }) => {
    return (
        <tr className="workarea__table-row">
            <td className="workarea__table-data">{kitchen?.id}</td>
            <td className="workarea__table-data">
                <Link
                    href={route("kitchens.show", kitchen)}
                    className="workarea__table-link"
                >
                    {kitchen?.name}
                </Link>
            </td>
            <td className="workarea__table-data">{kitchen?.contract_number}</td>
            <td className="workarea__table-data">{kitchen?.address}</td>
            <td className="workarea__table-data">
                {kitchen?.firmware_version}
            </td>
            <td className="workarea__table-data">{kitchen?.mqtt_prefix}</td>
            <td className="workarea__table-data">
                {kitchen?.settings_addrledstrip}
            </td>
            <td className="workarea__table-data">{kitchen?.settings_button}</td>
            <td className="workarea__table-data">
                {kitchen?.settings_general}
            </td>
            <td className="workarea__table-data">{kitchen?.settings_mosfet}</td>
            <td className="workarea__table-data">
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
                            onClick={() => {
                                setCurrent(kitchen);
                                openModal();
                            }}
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
            </td>
        </tr>
    );
};

export default Kitchen;
