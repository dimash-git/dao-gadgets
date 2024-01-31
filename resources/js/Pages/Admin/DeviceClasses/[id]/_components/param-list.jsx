import { usePage } from "@inertiajs/react";

import Param from "./param";

const ParamList = () => {
    const { deviceClass } = usePage().props;
    const { devicesclassvalues: params } = deviceClass;

    return (
        <div className="flex flex-col gap-y-8">
            <div className="max-w-[1260px] mt-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {params?.length > 0 ? (
                        params.map((param, idx) => (
                            <Param key={idx} param={param} />
                        ))
                    ) : (
                        <div className="p-4">Не найдено параметров</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ParamList;
