import { usePage } from "@inertiajs/react";

import Kitchen from "./kitchen";
import InertiaPagination from "@/Components/InertiaPagination";

const KitchenList = () => {
    const { kitchens } = usePage().props;

    return (
        <div className="flex flex-col gap-y-8">
            <div className="max-w-[1260px] mt-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {kitchens.data.map((kitchen, idx) => (
                        <Kitchen key={idx} kitchen={kitchen} />
                    ))}
                    <InertiaPagination data={kitchens} />
                </div>
            </div>
        </div>
    );
};

export default KitchenList;
