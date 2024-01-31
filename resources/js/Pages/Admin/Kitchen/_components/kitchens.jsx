import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";

export default function Kitchens({ kitchen }) {
    const [editing, setEditing] = useState(false);

    const { data, setData,patch, clearErrors, reset, errors } = useForm({
        name: kitchen.name,
        contract_number: kitchen.contract_number,
        address: kitchen.address,
        firmware_version: kitchen.firmware_version,
        mqtt_prefix: kitchen.mqtt_prefix,
        settings_addrledstrip: kitchen.settings_addrledstrip,
        settings_button: kitchen.settings_button,
        settings_general: kitchen.settings_general,
        settings_mosfet: kitchen.settings_mosfet,
        id: kitchen.id,

    });

    const submit = (e) => {
        e.preventDefault();
        console.log(data)
        patch(route("kitchen.update", kitchen.id), {
            onSuccess: () => {
                setEditing(false);
            },
        });
    };


    return (
        <div className="p-6 flex space-x-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 -scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
            </svg>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-800">
                            {kitchen?.name}
                        </span>
                    </div>
                </div>

                {editing ? (
                    <form onSubmit={submit}>

                        <div className="mt-4">
                            <InputLabel value="Системное имя" />
                            <TextInput
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                placeholder="Системное имя"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel value="Номер договора" />
                            <TextInput
                                value={data.contract_number}
                                onChange={(e) =>
                                    setData("contract_number", e.target.value)
                                }
                                placeholder="Номер договора"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel value="Адрес" />
                            <TextInput
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                placeholder="Адрес"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel value="Версия прошивки" />
                            <TextInput
                                value={data.firmware_version}
                                onChange={(e) =>
                                    setData("firmware_version", e.target.value)
                                }
                                placeholder="Версия прошивки"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel value="MQTT префикс" />
                            <TextInput
                                value={data.mqtt_prefix}
                                onChange={(e) =>
                                    setData("mqtt_prefix", e.target.value)
                                }
                                placeholder="MQTT префикс"
                            />


                        </div>
                        <div className="mt-4">
                            <InputLabel value="MQTT префикс" />
                            <TextInput
                                value={data.mqtt_prefix}
                                onChange={(e) =>
                                    setData("mqtt_prefix", e.target.value)
                                }
                                placeholder="MQTT префикс"
                            />
                        </div>
                        <InputError message={errors.message} className="mt-2" />
                        <div className="space-x-2">
                            <PrimaryButton className="mt-4">
                                Сохранить
                            </PrimaryButton>
                            <button
                                className="mt-4"
                                onClick={() => {
                                    setEditing(false);
                                    reset();
                                    clearErrors();
                                }}
                            >
                                Отмена
                            </button>
                        </div>
                    </form>
                ) : (
                    <>
                        <p className="mt-2 text-sm text-gray-900">
                            ID: {kitchen?.id}
                        </p>
                         <p className="mt-2 text-sm text-gray-900">
                            Название: {kitchen?.name}
                        </p>
                        <p className="mt-2 text-sm text-gray-900">
                            Номер договора: {kitchen?.contract_number}
                        </p>
                        <p className="mt-2 text-sm text-gray-900">
                            Адрес: {kitchen?.address}
                        </p>
                        <p className="mt-2 text-sm text-gray-900">
                            Версия прошивки: {kitchen?.firmware_version}
                        </p>
                        <p className="mt-2 text-sm text-gray-900">
                            MQTT префикс: {kitchen?.mqtt_prefix}
                        </p>
                        <p className="mt-2 text-sm text-gray-900">
                            Настройки адресной ленты (json): {kitchen?.settings_addrledstrip}
                        </p>
                        <p className="mt-2 text-sm text-gray-900">
                            Настройки кнопок (json): {kitchen?.settings_button}
                        </p>
                        <p className="mt-2 text-sm text-gray-900">
                            Настройки main платы (json): {kitchen?.settings_general}
                        </p>
                        <p className="mt-2 text-sm text-gray-900">
                            Настройки мосфетов (json): {kitchen?.settings_mosfet}
                        </p>

                    </>
                )}
            </div>
            <Dropdown>
                <Dropdown.Trigger>
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    </button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                    <button
                        className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"
                        onClick={() => setEditing(true)}
                    >
                        Изменить
                    </button>
                    <Dropdown.Link
                        as="button"
                        href={route("kitchen.destroy", kitchen.id)}
                        method="delete"
                    >
                        Удалить
                    </Dropdown.Link>
                    <Dropdown.Link
                        as="button"
                        href={route("kitchen.show", kitchen)}
                       // method="delete"
                    >
                        Дом
                    </Dropdown.Link>
                </Dropdown.Content>
            </Dropdown>
        </div>
    );
}
