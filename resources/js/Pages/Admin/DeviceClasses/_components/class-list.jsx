import { usePage } from "@inertiajs/react";

import Class from "./class";
import Modal from "@/Components/Modal";
import EditClassForm from "./forms/edit-class-form";
import { useState } from "react";

const ClassList = () => {
    const { deviceClasses } = usePage().props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [current, setCurrent] = useState(null);

    return (
        <div className="workarea__table-container">
            <table className="workarea__table">
                <thead className="workarea__table-head">
                    <tr className="workarea__table-row">
                        <th className="workarea__table-header">ID</th>
                        <th className="workarea__table-header">Название</th>
                        <th className="workarea__table-header">Тип</th>
                        <th className="workarea__table-header">Описание</th>
                        <th className="workarea__table-header">Дивизия</th>
                        <th className="workarea__table-header">RGB</th>
                        <th className="workarea__table-header">Параметры</th>
                        <th className="workarea__table-header">Сервисный</th>
                        <th className="workarea__table-header"></th>
                    </tr>
                </thead>
                <tbody className="workarea__table-body">
                    {deviceClasses.data.map((deviceClass, idx) => (
                        <Class
                            key={idx}
                            deviceClass={deviceClass}
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
                        Редактировать Класс
                    </h2>
                    <EditClassForm
                        closeModal={() => setIsModalOpen(false)}
                        deviceClass={current}
                        deviceClasses={deviceClasses}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default ClassList;
