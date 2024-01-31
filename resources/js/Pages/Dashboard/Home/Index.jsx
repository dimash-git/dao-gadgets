import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedUserLayout";
import DeviceList from "./_components/device-list";
import SectionList from "./_components/section-list";
import DeviceTypeList from "./_components/device-type-list";
import { SectionDeviceProvider } from "./_context/section-device-context";

export default function Home({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Дом" />

            <div className="flex flex-col gap-y-8 mt-8 h-full">
                <SectionDeviceProvider>
                    <SectionList />
                    <DeviceTypeList />
                    <DeviceList listClass="grid-cols-2" titleOn={false} />
                </SectionDeviceProvider>
            </div>
        </AuthenticatedLayout>
    );
}
