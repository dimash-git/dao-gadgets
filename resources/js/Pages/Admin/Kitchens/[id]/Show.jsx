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

            <h1 className="workarea__title">Дома : Параметры дома</h1>
            <div className="tabs">
                <Tab.Group>
                    <Tab.List className="tabs__tab-list">
                        {categories.map((category, idx) => (
                            <Tab
                                key={idx}
                                className={({ selected }) =>
                                    clsx(
                                        "tabs__tab-item",
                                        {
                                            "tabs__tab-item_selected":
                                                selected,
                                            "":
                                                !selected,
                                        }
                                    )
                                }
                            >
                                {category.name}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="tabs__panel-container">
                        {categories.map((category, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={
                                    "tabs__panel-content"
                                }
                            >
                                <category.Component />
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>

            
                        
                    
        </AuthenticatedLayout>
    );
}
