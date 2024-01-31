import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeviceList from "@/Components/sections/device-list";
import RoomList from "./_components/room-list";
import DeviceTypeList from "./_components/device-type-list";

export default function Home({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Дом" />

            <div className="flex flex-col gap-y-8 mt-8 h-full">
                <RoomList />
                <DeviceTypeList />
                <DeviceList listClass="grid-cols-2" titleOn={false} />
            </div>
        </AuthenticatedLayout>
    );
}
