import AddSettingForm from "@/Pages/Admin/Settings/_components/forms/add-setting-form";

import Setting from "@/Pages/Admin/Settings/_components/setting";
import { usePage } from "@inertiajs/react";

const TabSettings = () => {
    const { kitchen, kitchens } = usePage().props;

    const { settings } = kitchen;

    return (
        <div className="p-4 mt-8 bg-slate-200 rounded-xl">
            <div className="max-w-[320px]">
                <AddSettingForm kitchen={kitchen} />
            </div>
            <div className="flex flex-col gap-y-8">
                <div className="max-w-[1260px] mt-8">
                    <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                        {settings.map((setting, idx) => (
                            <Setting
                                key={idx}
                                setting={setting}
                                kitchens={kitchens}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabSettings;
