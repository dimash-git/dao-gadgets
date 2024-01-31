import React, { useState } from "react";

import { TagIcon } from "@heroicons/react/24/outline";
import ThreeDotsIcon from "@/Components/icons/ThreeDotsIcon";

import Dropdown from "@/Components/Dropdown";
import EditParamForm from "./forms/edit-param-form";

const localization = {
    single: "класс",
};

const Param = ({ param }) => {
    const [editing, setEditing] = useState(false);

    return (
        <div className="p-6 flex space-x-2">
            <TagIcon className="w-5 h-5" />
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <small className="ml-2 text-sm text-gray-600">
                            {new Date(param.created_at).toLocaleString()}
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
                                href={route(
                                    "device-class-values.destroy",
                                    param.id
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
                        <EditParamForm setEditing={setEditing} param={param} />
                    ) : (
                        <div className="space-y-4 text-md text-gray-900">
                            <p>Название: {param?.name}</p>
                            <p>Independent Title: {param?.intependent_title}</p>
                            <p>Default Value: {param?.default_value}</p>
                            <p>Topic: {param?.topic}</p>
                            <p>Relay Duration: {param?.relay_duration}</p>
                            <p>Topic Read: {param?.topic_read}</p>
                            <p>Val: {param?.val}</p>
                            <p>Eng: {param?.eng}</p>
                            <p>Описание: {param?.description}</p>
                            <p>Yandex Properties: {param?.yandex_properties}</p>
                            <p>Min: {param?.min}</p>
                            <p>Max: {param?.max}</p>
                            <p>Status On: {param?.status_on}</p>
                            <p>Status Off: {param?.status_off}</p>
                            <p>
                                Independent Device: {param?.independent_device}
                            </p>
                            <p>Тип: {param?.type}</p>
                            <p>
                                In Scenario Active: {param?.in_scenario_active}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Param;
