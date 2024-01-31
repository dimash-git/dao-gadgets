import { Head } from "@inertiajs/react";
import clsx from "clsx";
import { Tab } from "@headlessui/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";

import TabRooms from "./_components/tabs/tab-rooms";
import TabSettings from "./_components/tabs/tab-settings";
import TabUsers from "./_components/tabs/tab-users";

const categories = [
    {
        name: "Комнаты",
        Component: TabRooms,
    },
    {
        name: "Настройки",
        Component: TabSettings,
    },
    {
        name: "Пользователи",
        Component: TabUsers,
    },
];

export default function Show({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Кухня" />

            <div className="flex flex-col gap-y-8">
                <div className="max-w-[1260px] mt-10">
                    <div className="w-full px-2 py-16 sm:px-0">
                        <Tab.Group>
                            <Tab.List className="flex space-x-1 rounded-xl bg-slate-400/80 p-1">
                                {categories.map((category, idx) => (
                                    <Tab
                                        key={idx}
                                        className={({ selected }) =>
                                            clsx(
                                                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 focus:outline-none",
                                                {
                                                    "bg-white text-purple-600 shadow":
                                                        selected,
                                                    "text-blue-100 hover:bg-white/[0.12] hover:text-white":
                                                        !selected,
                                                }
                                            )
                                        }
                                    >
                                        {category.name}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2">
                                {categories.map((category, idx) => (
                                    <Tab.Panel
                                        key={idx}
                                        className={
                                            "rounded-xl bg-white focus:outline-none"
                                        }
                                    >
                                        <category.Component />
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
