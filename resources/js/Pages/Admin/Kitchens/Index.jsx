import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";

import KitchenList from "./_components/kitchen-list";
import AddKitchenForm from "./_components/forms/add-kitchen-form";

export default function KitchensPage({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Кухни" />

            {/* Form and Kitchen List */}
            <div className="p-4 mt-8">
                <div className="max-w-[320px]">
                    <AddKitchenForm />
                </div>
                <KitchenList />
            </div>
        </AuthenticatedLayout>
    );
}
