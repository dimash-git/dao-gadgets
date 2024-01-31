import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";

import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import {useForm, Head, usePage, Link} from "@inertiajs/react";
import Kitchens from "./_components/kitchens";
import { useEffect, useState } from "react";
import TextInput from "@/Components/TextInput.jsx";
import {patchedSetData} from "@/lib/utils.js";
import { Tab } from '@headlessui/react'
import MultiLevelMenu from "@/Components/MultiLevelMenu.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import Settings from "@/Pages/Admin/Settings/Index.jsx";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Show({ auth, kitchen ,sections}) {
    console.log(sections)
    let [categories] = useState({
        Комнаты: [

        ],
        Настройки: [

        ],
        Пользователи: [

        ],

    })

    const menuData =[{ id: "2", name: 'Дом', nodes: sections }];

    console.log(menuData)

    const handleItemSelected = (selectedNodeId) => {
        // Здесь вы можете выполнить необходимые действия с выбранным id в родительском компоненте
        console.log('Selected Node Id in Parent:', selectedNodeId);
    };

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

                    <div className="w-full px-2 py-16 sm:px-0">
                        <Tab.Group>
                            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                                {Object.keys(categories).map((category) => (
                                    <Tab
                                        key={category}
                                        className={({ selected }) =>
                                            classNames(
                                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                selected
                                                    ? 'bg-white text-blue-700 shadow'
                                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                            )
                                        }
                                    >
                                        {category}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2">

                                    <Tab.Panel

                                        className={classNames(
                                            'rounded-xl bg-white p-3',
                                            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                        )}
                                    >
                                        <ul>
                                            <Link
                                                href={route("sectionadd", {id:kitchen.id})}
                                                //  method="post"
                                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                            >
                                                Создать/Редактировать разделы
                                            </Link>
                                            <MultiLevelMenu data={menuData} onItemSelected={handleItemSelected} />

                                        </ul>
                                    </Tab.Panel>

                                <Tab.Panel>
                                 Настройки
                                </Tab.Panel>
                                <Tab.Panel>Тут выводим пользователей кухни</Tab.Panel>

                            </Tab.Panels>
                        </Tab.Group>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
