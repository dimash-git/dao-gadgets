import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";

import KitchenList from "./_components/kitchen-list";
import AddKitchenForm from "./_components/forms/add-kitchen-form";

export default function KitchensPage({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Кухни" />

            {/* Вынести компонент AddKitchenForm на отдельный роут типа kitchens/create.  */}
            <h1 className="workarea__title">Дома : Создание элемента</h1>
            <AddKitchenForm />

            <h1 className="workarea__title">Дома</h1>
            <Link className="workarea__create-element-button" href="#">Создать элемент</Link> {/* Вставить ссылку на страницу создания элемента */}
            <KitchenList />
        </AuthenticatedLayout>
    );
}
