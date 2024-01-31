import { useState } from "react";

import ThoughtsIcon from "@/Components/icons/ThoughtsIcon";
import ThreeDotsIcon from "@/Components/icons/ThreeDotsIcon";

import Dropdown from "@/Components/Dropdown";
import EditSectionForm from "./forms/edit-section-form";

const localization = {
    single: "секцию",
};

const KitchenSection = ({ kitchen, section }) => {
    const [editing, setEditing] = useState(false);

    return (
        <div className="p-6 flex space-x-2">
            <ThoughtsIcon />
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <small className="ml-2 text-sm text-gray-600">
                            {new Date(section.created_at).toLocaleString()}
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
                                    "kitchen-sections.destroy",
                                    section.id
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
                        <EditSectionForm
                            section={section}
                            kitchen={kitchen}
                            setEditing={setEditing}
                        />
                    ) : (
                        <div className="space-y-4 text-md text-gray-900">
                            <p>На Английском: {section?.eng}</p>
                            <p>Название: {section?.name}</p>
                            <p>ID Цвета: {section?.id_color}</p>
                            <p>
                                Активный:{" "}
                                {section?.is_active === 1 ? "Да" : "Нет"}
                            </p>
                            <p>Тип: {section?.type}</p>
                            <p>
                                Кухня:&nbsp;
                                {kitchen.name}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default KitchenSection;
