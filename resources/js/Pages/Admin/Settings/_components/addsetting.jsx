import React, { useEffect, useState } from "react";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import { patchedSetData } from "@/lib/utils.js";
import InputLabel from "@/Components/InputLabel.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import Textarea from "@/Components/Textarea.jsx";


const Addsetting = ({ onAddSetting, user,  kitchens }) => {
    //const [kitchens, setKitchens] = useState([]);
    const [selectedKitchens, setSelectedKitchens] = useState([]);
    const [selectedRole, setSelectedRole] = useState([]);
    const [selectedCheckbox, setSelectedCheckbox] = useState(false);
    const { data, setData, get, post, errors } = useForm({
        name: "",
        value: "",
        kitchen_id: "",
        title: "",
        description: "",
        active: true,

    });
    console.log(kitchens)

    const setFormData = patchedSetData(setData)


    useEffect(() => {

        setFormData("kitchen_id", selectedKitchens.id);
        setFormData( 'active',selectedCheckbox ? 1 : 0,)

    }, [selectedRole,selectedKitchens,selectedCheckbox]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        post(route("settings.store"), data, {
            onSuccess: (response) => {
                onAddSetting(response.setting);
                setData({
                    name: "",
                    kitchen_id: '',
                    description: '',
                    title: '',
                    active: false,
                });
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mt-4">
                <TextInput
                    value={data.title}
                    onChange={(e) => setFormData("title", e.target.value)}
                    placeholder="Название параметра"
                />
            </div>
            <div className="mt-4">
                <TextInput
                    value={data.name}
                    onChange={(e) => setFormData("name", e.target.value)}
                    placeholder="Имя"
                />
            </div>
            <div className="mt-4">
                <TextInput
                    value={data.value}
                    onChange={(e) => setFormData("value", e.target.value)}
                    placeholder="Значение"
                />
            </div>

            <div className="mt-4">
                <Select
                    options={kitchens}
                    setSelected={setSelectedKitchens}
                    selected={selectedKitchens}
                    placeholder="Выберите Дом"


                />

            </div>


            <div className="mt-4">
            <Textarea
                className="my-custom-class"
                placeholder="Описание"
                value={data.description}
                onChange={(e) => setFormData("description", e.target.value)}
                isFocused={false}
                // ref={textareaRef}
            />


            </div>
            <div className="mt-4">
                <InputLabel>Активность</InputLabel>
                <Checkbox
                    checked={selectedCheckbox}
                    onChange={() => setSelectedCheckbox(!selectedCheckbox)}
                />

            </div>
            <div className="space-x-2 mt-4">
                <PrimaryButton type="submit">Добавить настройку</PrimaryButton>
            </div>
            {errors && (
                <div className="text-red-500 mt-2">
                    {errors.name && <p>{errors.name}</p>}
              {/*      {errors.password && <p>{errors.password}</p>}*/}
                </div>
            )}
        </form>
    );
};

export default Addsetting;
