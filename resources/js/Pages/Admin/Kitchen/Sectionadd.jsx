import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";

import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head ,usePage} from "@inertiajs/react";
import Kitchens from "./_components/kitchens";
import React, { useEffect, useState } from "react";
import TextInput from "@/Components/TextInput.jsx";
import {patchedSetData} from "@/lib/utils.js";
import Sections from "@/Pages/Admin/Kitchen/_components/sections.jsx";
import Select from "@/Components/select.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import InputLabel from "@/Components/InputLabel.jsx";


export default function Sectionadd({ auth,kitchen, sections ,kitchens}) {
   // console.log(kitchen)
    const [selectedKitchen, setSelectedKitchen] = useState([]);
    const [selectedCheckbox, setSelectedCheckbox] = useState(false);
    const { data, setData,post, processing, reset, errors } = useForm({
        name: "",
        kitchen_id:"",
        is_active:"",

    });

    const setFormData = patchedSetData(setData)


    useEffect(() => {

        setSelectedKitchen(kitchen)
        console.log(selectedKitchen.id)
        console.log(selectedCheckbox)
        setFormData('kitchen_id', selectedKitchen.id)
        setFormData( 'is_active',selectedCheckbox ? 1 : 0,)

    }, [selectedCheckbox,selectedKitchen]);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        post(route("kitchen-section.store"), data, {
            onSuccess: (response) => {
                // onAddKitchen(response.kitchen);

                setData({
                    name: "",
                    kitchen_id: "",
                    is_active: "",


                });
                setFormData("name", "")
                reset({
                    name: "",
                    is_active: false,
                });
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Кухня" />

            <div className="flex flex-col gap-y-8">
                <div className="max-w-[1260px] mt-10">
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <TextInput
                                value={data.name}
                                placeholder="Введите название комнаты"
                                onChange={(e) =>
                                    setFormData("name", e.target.value)
                                }
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
                        <PrimaryButton className="mt-4" disabled={processing}>
                            Добавить
                        </PrimaryButton>
                    </form>
                    <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                        {sections.length > 0 &&
                            sections.map((section) => (
                                <Sections
                                    key={section.id}
                                    section={section}
                                    kitchens={kitchens}

                                />
                            ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
