import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";
import KitchenSectionList from "./_components/kitchen-section/kitchen-section-list";
import AddSectionForm from "./_components/kitchen-section/forms/add-section-form";

export default function SectionsPage({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Секции кухни" />

            {/* Form and Sections List */}
            <div className="p-4 mt-8">
                <div className="max-w-[320px]">
                    <AddSectionForm />
                </div>
                <KitchenSectionList />
            </div>
        </AuthenticatedLayout>
    );
}
