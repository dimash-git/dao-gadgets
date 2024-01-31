import { usePage } from "@inertiajs/react";

import KitchenSection from "./kitchen-section";

const KitchenSectionList = () => {
    const { kitchen } = usePage().props;
    const { sections } = kitchen;
    return (
        <div className="flex flex-col gap-y-8">
            <div className="max-w-[1260px] mt-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {sections.map((section, idx) => (
                        <KitchenSection
                            key={idx}
                            section={section}
                            kitchen={kitchen}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KitchenSectionList;
