import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";
import AddClassForm from "./_components/forms/add-class-form";
import ClassList from "./_components/class-list";

export default function KitchenClassesPage({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            {/* Page Title */}
            <Head title="DAO - Классы девайсов" />

            <div className="p-4 mt-8">
                <div className="max-w-[320px]">
                    <AddClassForm />
                </div>
                <ClassList />
            </div>
        </AuthenticatedLayout>
    );
}
