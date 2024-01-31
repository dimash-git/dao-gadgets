import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";


export default function Market({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Маркет" />

            <div className="flex flex-col gap-y-8 mt-8 h-full">
                <section className='market market_theme_day'>Здесь Товары
                </section>

            </div>
        </AuthenticatedLayout>
    );
}
