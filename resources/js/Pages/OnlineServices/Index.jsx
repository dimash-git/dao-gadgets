import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";


export default function OnlineServices({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Маркет" />

            <div className="flex flex-col gap-y-8 mt-8 h-full">
                <section className='online-services online-services_theme_day'>Здесь Сервисы
                </section>

            </div>
        </AuthenticatedLayout>
    );
}
