import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedUserLayout";
import DateTime from "@/Components/date-time";
import DeviceList from "@/Components/sections/device-list";
import SectionNavList from "./_components/section-nav-list";
import NewsList from "./_components/news-list";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Дэшборд" />
            {/* title meta для стр. */}

            <div className="flex flex-col gap-y-8 mt-8">
                <DateTime />
                <SectionNavList />
                {/* <DeviceList listClass="md:grid-flow-col md:auto-cols-[150px] max-md:grid-cols-2" /> */}
                {/* listClass опциональный props для этого компонента, подробнее в самом компоненте */}
                {/* md:auto-cols-[150px] начиная с medium сайз экранов каждая ячейка должна быть шириной 150px */}
                {/* max-md:grid-cols-2 для девайсов меньше medium сайз экранов в 1 строке разместить по 2 элемента */}
                {/* <NewsList /> */}
            </div>
        </AuthenticatedLayout>
    );
}
