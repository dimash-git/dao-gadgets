import { usePage } from "@inertiajs/react";

import Class from "./class";
import InertiaPagination from "@/Components/InertiaPagination";

const ClassList = () => {
    const { deviceClasses } = usePage().props;

    return (
        <div className="flex flex-col gap-y-8">
            <div className="max-w-[1260px] mt-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {deviceClasses.data.map((deviceClass, idx) => (
                        <Class key={idx} deviceClass={deviceClass} />
                    ))}
                    <InertiaPagination data={deviceClasses} />
                </div>
            </div>
        </div>
    );
};

export default ClassList;
