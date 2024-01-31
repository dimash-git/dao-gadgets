import { useState } from "react";

import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import ThreeDotsIcon from "@/Components/icons/ThreeDotsIcon";

import Dropdown from "@/Components/Dropdown";
import EditSettingForm from "./forms/edit-setting-form";

const localization = {
    single: "параметр",
};

const Setting = ({ setting, kitchens }) => {
    const [editing, setEditing] = useState(false);

    return (
        <div className="p-6 flex space-x-2">
            <Cog6ToothIcon className="h-5 w-5" />
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <small className="ml-2 text-sm text-gray-600">
                            {new Date(setting.created_at).toLocaleString()}
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
                                href={route("settings.destroy", setting.id)}
                                method="delete"
                            >
                                Удалить
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
                <div className="mt-4">
                    {editing ? (
                        <EditSettingForm
                            setting={setting}
                            kitchens={kitchens}
                            setEditing={setEditing}
                        />
                    ) : (
                        <div className="space-y-4 text-md text-gray-900">
                            <p>Название параметра: {setting?.title}</p>
                            <p>Системное имя: {setting?.name}</p>
                            <p>Значение: {setting?.value}</p>
                            <p>
                                Кухня:&nbsp;
                                {setting?.kitchen_id
                                    ? kitchens.find(
                                          (k) => k.id === setting.kitchen_id
                                      )?.name
                                    : "-"}
                            </p>
                            <p>Описание: {setting?.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Setting;
