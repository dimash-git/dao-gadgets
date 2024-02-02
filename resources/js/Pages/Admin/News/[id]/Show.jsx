import { Head, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";
import EditNewsForm from "../_components/forms/edit-news-form";

const Show = ({ auth }) => {
    const { news, kitchens } = usePage().props;
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Редактирование новости" />

            <div className="p-4 mt-8 w-full">
                <EditNewsForm news={news} kitchens={kitchens} />
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
