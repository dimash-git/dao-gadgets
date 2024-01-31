import { Head, Link } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";

import AddSettingForm from "@/Pages/Admin/Settings/_components/forms/add-setting-form.jsx";
import SettingList from "./_components/setting-list";

export default function SettingsPage({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            {/* Page Title */}
            <Head title="DAO - Настройки" />

            {/* Вынести компонент AddSettingForm на отдельный роут */}
            <h1 className="workarea__title">Настройки : Создание элемента</h1>
            <AddSettingForm />

            <h1 className="workarea__title">Настройки</h1>
            <Link className="workarea__create-element-button" href="#">Создать элемент</Link> {/* Вставить ссылку на страницу создания элемента */}
            <SettingList />

        </AuthenticatedLayout>
    );
}
