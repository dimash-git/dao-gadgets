import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";

export default function Admin({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Админ панель" />

        </AuthenticatedLayout>
    );
}
