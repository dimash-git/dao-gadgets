import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";
import AddNewsForm from "./_components/forms/add-news-form";
import NewsList from "./_components/news-list";

export default function NewsPage({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Пользователи" />

            <h1 className="workarea__title">Новости</h1>

            <AddNewsForm />

            <NewsList />
        </AuthenticatedLayout>
    );
}
