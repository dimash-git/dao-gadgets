import React, {useEffect, useState} from "react";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import Select from "@/Components/select.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import {patchedSetData} from "@/lib/utils.js";

export default function Sections({ section , kitchens }) {

    const [editing, setEditing] = useState(false);
    const [selectedKitchen, setSelectedKitchen] = useState([]);
    const [selectedCheckbox, setSelectedCheckbox] = useState(false);
    const [editingName, setEditingName] = useState(section.name);
    const { data, setData,patch, clearErrors, reset, errors } = useForm({
        name: section.name,
        is_active: false,
        kitchen_id: '',
        id: '',

    });
    const setFormData = patchedSetData(setData)
    useEffect(() => {

        for (const kitchen of kitchens){
            if(kitchen.id !== section.kitchen_id  ){

                continue
            }
            setSelectedKitchen( kitchen )
            break;
        }
        console.log(section)
        let activeCheckbox = (element)=>{
            console.log(section.is_active)
           return section.is_active === 1


        }
        setSelectedCheckbox(activeCheckbox);

    }, [kitchens,section]);
    useEffect(() => {


        setFormData('is_active',selectedCheckbox === true)
        setFormData('kitchen_id',selectedKitchen.id)
        setFormData('name',editingName)


    }, [selectedKitchen,selectedCheckbox,editingName]);

    const handleNameChange = (e) => {
        setEditingName(e.target.value);
    };
    const submit = (e) => {
        e.preventDefault();
        console.log(data)
        patch(route("kitchen-section.update", section.id), {
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
                            {section?.name}
                        </span>
                    </div>
                </div>

                {editing ? (
                    <form onSubmit={submit}>

                        <div className="mt-4">
                            <InputLabel value="Название раздела" />
                            <TextInput
                                value={editingName}
                                onChange={handleNameChange}
                                placeholder="Название раздела"
                            />
                        </div>
                        <div className="mt-4">
                            <Select
                                options={kitchens}
                                setSelected={setSelectedKitchen}
                                selected={selectedKitchen}
                                placeholder="Выберите Дом"
                            />

                        </div>
                        <div className="mt-4">
                            <InputLabel>Активность</InputLabel>
                            <Checkbox
                                checked={selectedCheckbox}
                                onChange={() => setSelectedCheckbox(!selectedCheckbox)}
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
                            ID: {section?.id}
                        </p>
                         <p className="mt-2 text-sm text-gray-900">
                            Название: {section?.name}
                        </p>
                        <p className="mt-2 text-sm text-gray-900">
                            Активен: {section.is_active}
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
                        href={route("kitchen-section.destroy", section.id)}
                        method="delete"
                    >
                        Удалить
                    </Dropdown.Link>
                    <Dropdown.Link
                        as="button"
                        href={route("kitchen-section.show", section)}
                       // method="delete"
                    >
                        Дом
                    </Dropdown.Link>
                </Dropdown.Content>
            </Dropdown>
        </div>
    );
}
