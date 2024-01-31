import React, {useEffect, useState} from "react";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";
import PrimaryButton from "@/Components/PrimaryButton";
import {useForm, usePage} from "@inertiajs/react";
import {patchedSetData} from "@/lib/utils.js";

const roles = [{name: "admin"}, {name: "user"}, {name: "moderator"}];

const AddUser = ({onAddUser, user, kitchens}) => {
    //const [kitchens, setKitchens] = useState([]);
    const [selectedKitchens, setSelectedKitchens] = useState([]);
    const [selectedRole, setSelectedRole] = useState([]);
    const {data, setData, get, post, errors} = useForm({
        name: "",
        email: "",
        password: "",
        role: selectedRole.name,
        kitchen_id: "",
    });
    console.log(kitchens)

    const setFormData = patchedSetData(setData)


    useEffect(() => {
        setFormData("role", selectedRole.name);
        setFormData("kitchen_id", selectedKitchens.id);

    }, [selectedRole, selectedKitchens]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        post(route("users.store"), data, {
            onSuccess: (response) => {
                onAddUser(response.user);
                setData({
                    name: "",
                    email: "",
                    password: "",
                    role: "",
                    kitchen_id: 1,
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
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    placeholder="Имя"
                />
            </div>
            <div className="mt-4">
                <TextInput
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    placeholder="Email"
                />
            </div>
            <div className="mt-4">
                <TextInput
                    type="password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    placeholder="Пароль"
                />
            </div>
            <div className="mt-4">
                <Select
                    options={roles}
                    setSelected={setSelectedRole}
                    selected={selectedRole}
                    placeholder="Выберите Роль"
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
            <div className="space-x-2 mt-4">
                <PrimaryButton type="submit">Добавить пользователя</PrimaryButton>
            </div>
            {errors && (
                <div className="text-red-500 mt-2">
                    {errors.email && <p>{errors.email}</p>}
                    {errors.password && <p>{errors.password}</p>}
                </div>
            )}
        </form>
    );
};

export default AddUser;
