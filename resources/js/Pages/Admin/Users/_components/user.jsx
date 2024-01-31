import React, { useState } from "react";

import { UserIcon } from "@heroicons/react/24/outline";
import ThreeDotsIcon from "@/Components/icons/ThreeDotsIcon";

import Dropdown from "@/Components/Dropdown";
import EditUserForm from "./forms/edit-user-form";

const localization = {
    single: "роль",
};

const User = ({ user, kitchens, roles }) => {
    const [editing, setEditing] = useState(false);

    return (
        <>
            {editing ? (
                {/* Переделать на рабочий вариант, но сначала определиться как должно быть
                <tr className="workarea__table-row">
                    <EditUserForm
                        setEditing={setEditing}
                        user={user}
                        kitchens={kitchens}
                        roles={roles}
                    />
                </tr>
                */}
            ) : (
                <tr className="workarea__table-row">
                    <td className="workarea__table-data">
                        {user?.id}
                    </td>
                    <td className="workarea__table-data">
                        {user?.name}
                    </td>
                    <td className="workarea__table-data">
                        {user?.email}
                    </td>
                    <td className="workarea__table-data">
                        {user?.kitchen_id
                            ? kitchens.find(
                                (k) => k.id === user.kitchen_id
                                    )?.name
                            : "-"}
                    </td>
                    <td className="workarea__table-data">
                        {user?.roles?.[0]?.name}
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
                                    onClick={() => setEditing(true)}
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
            )}
        </>
        
/*
        <div className="p-6 flex space-x-2">
            <UserIcon className="h-5 w-5" />
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <small className="ml-2 text-sm text-gray-600">
                            {new Date(user.created_at).toLocaleString()}
                        </small>
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
                                href={route("users.destroy", user.id)}
                                method="delete"
                            >
                                Удалить
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
                <div className="mt-4">
                    {editing ? (
                        <EditUserForm
                            setEditing={setEditing}
                            user={user}
                            kitchens={kitchens}
                            roles={roles}
                        />
                    ) : (
                        <div className="space-y-4 text-md text-gray-900">
                            <p>Имя: {user?.name}</p>
                            <p>Email: {user?.email}</p>
                            <p>
                                Кухня:&nbsp;
                                {user?.kitchen_id
                                    ? kitchens.find(
                                          (k) => k.id === user.kitchen_id
                                      )?.name
                                    : "-"}
                            </p>
                            <p>Роль: {user?.roles?.[0]?.name}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
*/
    );
};

export default User;
