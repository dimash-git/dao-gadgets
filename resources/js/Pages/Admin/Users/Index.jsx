import { Head, Link } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";
import AddUserForm from "./_components/forms/add-user-form";
import UserList from "./_components/user-list";

export default function UsersPage({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            {/* Page Title */}
            <Head title="DAO - Пользователи" />

            {/* Вынести компонент AddUserForm на отдельный роут типа users/create.  */}
            <h1 className="workarea__title">Пользователи : Создание элемента</h1>
            <AddUserForm />
            
            <h1 className="workarea__title">Пользователи</h1>
            <Link className="workarea__create-element-button" href="#">Создать элемент</Link> {/* Вставить ссылку на страницу создания элемента */}
            <UserList />

        </AuthenticatedLayout>
    );
}
