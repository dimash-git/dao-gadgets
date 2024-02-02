import { useState } from "react";

import ThreeDotsIcon from "@/Components/icons/ThreeDotsIcon";

import Dropdown from "@/Components/Dropdown";

const localization = {
    single: "параметр",
};

const Setting = ({
    setting,
    kitchens,
    setCurrent = null,
    openModal = null,
}) => {
    return (
        <tr className="workarea__table-row">
            <td className="workarea__table-data">{setting?.id}</td>
            <td className="workarea__table-data">{setting?.title}</td>
            <td className="workarea__table-data">{setting?.name}</td>
            <td className="workarea__table-data">{setting?.value}</td>
            <td className="workarea__table-data">
                {setting?.kitchen_id
                    ? kitchens.find((k) => k.id === setting.kitchen_id)?.name
                    : "-"}
            </td>
            <td className="workarea__table-data">{setting?.description}</td>
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
                                setCurrent(setting);
                                openModal();
                            }}
                        >
                            Изменить {localization?.single}
                        </button>
                        <Dropdown.Link
                            as="button"
                            href={route("settings.destroy", setting.id)}
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

export default Setting;
