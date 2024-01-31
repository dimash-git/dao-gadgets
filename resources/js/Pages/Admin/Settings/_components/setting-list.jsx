import { usePage } from "@inertiajs/react";

import Setting from "./setting";
import InertiaPagination from "@/Components/InertiaPagination";

const SettingList = () => {
    const { settings, kitchens } = usePage().props;
    return (
        <div className="flex flex-col gap-y-8">
            <div className="max-w-[1260px] mt-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {settings.data.map((setting, idx) => (
                        <Setting
                            key={idx}
                            setting={setting}
                            kitchens={kitchens}
                        />
                    ))}
                    <InertiaPagination data={settings} />
                </div>
            </div>
        </div>
    );
};

export default SettingList;
