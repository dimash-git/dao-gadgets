import { usePage } from "@inertiajs/react";

import Kitchen from "./kitchen";
import InertiaPagination from "@/Components/InertiaPagination";
import Modal from "@/Components/Modal";
import EditKitchenForm from "./forms/edit-kitchen-form";
import { useState } from "react";

const KitchenList = () => {
    const { kitchens } = usePage().props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [current, setCurrent] = useState(null);

    return (
        <div className="workarea__table-container">
            <table className="workarea__table">
                <thead className="workarea__table-head">
                    <tr className="workarea__table-row">
                        {/* В дальнейшем реализовать создание заголовков таблицы циклом по выбранным параметрам */}
                        <th className="workarea__table-header">ID</th>
                        <th className="workarea__table-header">Название</th>
                        <th className="workarea__table-header">
                            Номер договора
                        </th>
                        <th className="workarea__table-header">Адрес</th>
                        <th className="workarea__table-header">
                            Версия прошивки
                        </th>
                        <th className="workarea__table-header">MQTT-префикс</th>
                        <th className="workarea__table-header">
                            Настройки адресной ленты (json)
                        </th>
                        <th className="workarea__table-header">
                            Настройки кнопок (json)
                        </th>
                        <th className="workarea__table-header">
                            Настройки main платы (json)
                        </th>
                        <th className="workarea__table-header">
                            Настройки мосфетов (json)
                        </th>
                        <th className="workarea__table-header"></th>
                    </tr>
                </thead>
                <tbody className="workarea__table-body">
                    {kitchens.data.map((kitchen, idx) => (
                        <Kitchen
                            key={idx}
                            kitchen={kitchen}
                            openModal={() => setIsModalOpen(true)}
                            setCurrent={setCurrent}
                        />
                    ))}
                </tbody>
            </table>
            {/* Пагинация скорее всего не нужна
                <InertiaPagination data={kitchens} />
            */}

            <Modal
                show={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                className="sm:max-w-[1000px]"
            >
                <div className="p-4">
                    <h2 className="text-lg leading-5 font-semibold mb-8">
                        Редактировать Дом
                    </h2>
                    <EditKitchenForm
                        closeModal={() => setIsModalOpen(false)}
                        kitchen={current}
                        kitchens={kitchens}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default KitchenList;
