import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";
import AddUserForm from "./_components/forms/add-user-form";
import UserList from "./_components/user-list";

export default function UsersPage({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            {/* Page Title */}
            <Head title="DAO - Пользователи" />

            {/* Form and User List */}
            <div className="p-4 mt-8">
                <div className="max-w-[320px]">
                    <AddUserForm />
                </div>
                <UserList />
            </div>
        </AuthenticatedLayout>
    );
}
