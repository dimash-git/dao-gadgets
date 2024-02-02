import React from "react";

import ThreeDotsIcon from "@/Components/icons/ThreeDotsIcon";

import Dropdown from "@/Components/Dropdown";

const localization = {
    single: "роль",
};

const User = ({ user, kitchens, setCurrent = null, openModal = null }) => {
    return (
        <tr className="workarea__table-row">
            <td className="workarea__table-data">{user?.id}</td>
            <td className="workarea__table-data">{user?.name}</td>
            <td className="workarea__table-data">{user?.email}</td>
            <td className="workarea__table-data">
                {user?.kitchen_id
                    ? kitchens.find((k) => k.id === user.kitchen_id)?.name
                    : "-"}
            </td>
            <td className="workarea__table-data">{user?.roles?.[0]?.name}</td>

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
                                setCurrent(user);
                                openModal();
                            }}
                        >
                            Изменить {localization?.single}
                        </button>
                        <Dropdown.Link
                            as="button"
                            href={route("users.destroy", user.id)}
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

export default User;
