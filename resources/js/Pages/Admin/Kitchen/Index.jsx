import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";

import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head ,usePage} from "@inertiajs/react";
import Kitchens from "./_components/kitchens";
import { useEffect, useState } from "react";
import TextInput from "@/Components/TextInput.jsx";
import {patchedSetData} from "@/lib/utils.js";




export default function Kitchen({ auth, kitchens }) {

    const { data, setData,post, processing, reset, errors } = useForm({
        name: "",
        contract_number: "",
        address: "",
        firmware_version: "",
        mqtt_prefix: "",
        settings_addrledstrip: "",
        settings_button: "",
        settings_general: "",
        settings_mosfet: "",
        id: 1,

    });
    const setFormData = patchedSetData(setData)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        post(route("kitchen.store"), data, {
            onSuccess: (response) => {
               // onAddKitchen(response.kitchen);
                setData({
                    name: "",
                    contract_number: "",
                    address: "",
                    firmware_version: "",
                    mqtt_prefix: "",
                    settings_addrledstrip: "",
                    settings_button: "",
                    settings_general: "",
                    settings_mosfet: "",

                });
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    const handleKitchenDelete = (id) => {
        setDevices((currentKitchens) =>
            currentKitchens.filter((kitchen) => kitchen.id !== id)
        );
    };

    const handleKitchenUpdate = (updatedDevice) => {
        setDevices((currentKitchens) =>
            currentDevices.map((kitchen) =>
                kitchen.id === updatedKitchen.id ? updatedKitchen : kitchen
            )
        );
    };

    const [devices, setDevices] = useState([]);

    useEffect(() => {
    /*    const fetchKitchenDevices = async () => {
            try {
                const res = await axios.get("/api/kitchens", {
                    withCredentials: true,
                }); // Adjust the URL as needed
                const { data } = res;
                setDevices(data);
            } catch (error) {
                console.error(
                    "Error fetching Kitchen Devices in Index Page (Kitchen): ",
                    error
                );
            }
        };
        fetchKitchenDevices();*/
    }, []);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Кухня" />

            <div className="flex flex-col gap-y-8">
                <div className="max-w-[1260px] mt-10">
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <TextInput
                                value={data.name}
                                placeholder="Введите имя кухни"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                        </div>
                        <div className="mt-4">
                            <TextInput
                                value={data.contract_number}
                                placeholder="Введите номер договора"
                                onChange={(e) =>
                                    setData("contract_number", e.target.value)
                                }
                            />
                        </div>
                        <div className="mt-4">
                            <TextInput
                                value={data.address}
                                placeholder="Введите адрес"
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                        </div>
                        <div className="mt-4">
                            <TextInput
                                value={data.firmware_version}
                                placeholder="Версию прошивки"
                                onChange={(e) =>
                                    setData("firmware_version", e.target.value)
                                }
                            />
                        </div>
                        <div className="mt-4">
                            <TextInput
                                value={data.mqtt_prefix}
                                placeholder="MQTT Префикс"
                                onChange={(e) =>
                                    setData("mqtt_prefix", e.target.value)
                                }
                            />
                        </div>
                        <div className="mt-4">
                            <TextInput
                                value={data.settings_addrledstrip}
                                placeholder="Настройки адресных лент JSON"
                                onChange={(e) =>
                                    setData("settings_addrledstrip", e.target.value)
                                }
                            />
                        </div>
                        <div className="mt-4">
                            <TextInput
                                value={data.settings_button}
                                placeholder="Настройки кнопок JSON"
                                onChange={(e) =>
                                    setData("settings_button", e.target.value)
                                }
                            />
                        </div>
                        <div className="mt-4">
                            <TextInput
                                value={data.settings_general}
                                placeholder="Настройки MAIN JSON"
                                onChange={(e) =>
                                    setData("settings_general", e.target.value)
                                }
                            />
                        </div>
                        <div className="mt-4">
                            <TextInput
                                value={data.settings_mosfet}
                                placeholder="Настройки мосфетов JSON"
                                onChange={(e) =>
                                    setData("settings_mosfet", e.target.value)
                                }
                            />
                        </div>

                        <InputError message={errors.message} className="mt-2" />
                        <PrimaryButton className="mt-4" disabled={processing}>
                            Добавить
                        </PrimaryButton>
                    </form>
                    <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                        {kitchens.length > 0 &&
                            kitchens.map((kitchen) => (
                                <Kitchens
                                    key={kitchen.id}
                                    kitchen={kitchen}

                                />
                            ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
