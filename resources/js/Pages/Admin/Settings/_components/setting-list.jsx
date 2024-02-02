import { usePage } from "@inertiajs/react";

import Setting from "./setting";
import Modal from "@/Components/Modal";
import { useState } from "react";
import EditSettingForm from "./forms/edit-setting-form";

const SettingList = () => {
    const { settings, kitchens } = usePage().props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [current, setCurrent] = useState(null);

    return (
        <div className="workarea__table-container">
            <table className="workarea__table">
                <thead className="workarea__table-head">
                    <tr className="workarea__table-row">
                        {/* В дальнейшем реализовать создание заголовков таблицы циклом по выбранным параметрам */}
                        <th className="workarea__table-header">ID</th>
                        <th className="workarea__table-header">
                            Название параметра
                        </th>
                        <th className="workarea__table-header">
                            Системное имя
                        </th>
                        <th className="workarea__table-header">Значение</th>
                        <th className="workarea__table-header">Кухня</th>
                        <th className="workarea__table-header">Описание</th>
                        <th className="workarea__table-header"></th>
                    </tr>
                </thead>
                <tbody className="workarea__table-body">
                    {settings.data.map((setting, idx) => (
                        <Setting
                            key={idx}
                            setting={setting}
                            kitchens={kitchens}
                            openModal={() => setIsModalOpen(true)}
                            setCurrent={setCurrent}
                        />
                    ))}
                </tbody>
            </table>

            <Modal
                show={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                className="sm:max-w-[1000px]"
            >
                <div className="p-4">
                    <h2 className="text-lg leading-5 font-semibold mb-8">
                        Редактировать Настройки
                    </h2>
                    <EditSettingForm
                        closeModal={() => setIsModalOpen(false)}
                        setting={current}
                        kitchens={kitchens}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default SettingList;
