import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedAdminLayout";
import AddParamForm from "./_components/forms/add-param-form";
import ParamList from "./_components/param-list";

const Show = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="DAO - Параметры класса девайса" />

            <div className="p-4 mt-8">
                <div className="max-w-[320px]">
                    <AddParamForm />
                </div>
                <ParamList />
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
