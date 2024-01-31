import { Head, Link } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";
import AddClassForm from "./_components/forms/add-class-form";
import ClassList from "./_components/class-list";

export default function KitchenClassesPage({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            {/* Page Title */}
            <Head title="DAO - Классы девайсов" />

            {/* Вынести компонент AddClassForm на отдельный роут типа users/create.  */}
            <h1 className="workarea__title">Классы устройств : Создание элемента</h1>
            <AddClassForm />

            <h1 className="workarea__title">Классы устройств</h1>
            <Link className="workarea__create-element-button" href="#">Создать элемент</Link> {/* Вставить ссылку на страницу создания элемента */}
            <ClassList />

        </AuthenticatedLayout>
    );
}
