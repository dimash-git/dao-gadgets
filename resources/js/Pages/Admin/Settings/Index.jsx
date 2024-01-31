import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";

import AddSettingForm from "@/Pages/Admin/Settings/_components/forms/add-setting-form.jsx";
import SettingList from "./_components/setting-list";

export default function SettingsPage({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            {/* Page Title */}
            <Head title="DAO - Настройки" />

            {/* Form and Setting List */}
            <div className="p-4 mt-8">
                <div className="max-w-[320px]">
                    <AddSettingForm />
                </div>
                <SettingList />
            </div>
        </AuthenticatedLayout>
    );
}
