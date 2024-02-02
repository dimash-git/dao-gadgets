import { usePage } from "@inertiajs/react";

import User from "./user";
import InertiaPagination from "@/Components/InertiaPagination";
import { useState } from "react";
import Modal from "@/Components/Modal";
import EditUserForm from "./forms/edit-user-form";

const UserList = () => {
    const { users, kitchens, roles } = usePage().props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [current, setCurrent] = useState(null);

    return (
        <div className="workarea__table-container">
            <table className="workarea__table">
                <thead className="workarea__table-head">
                    <tr className="workarea__table-row">
                        {/* В дальнейшем реализовать создание заголовков таблицы циклом по выбранным параметрам */}
                        <th className="workarea__table-header">ID</th>
                        <th className="workarea__table-header">Имя</th>
                        <th className="workarea__table-header">Email</th>
                        <th className="workarea__table-header">Дом</th>
                        <th className="workarea__table-header">Роль</th>
                        <th className="workarea__table-header"></th>
                    </tr>
                </thead>
                <tbody className="workarea__table-body">
                    {users.data.map((user, idx) => (
                        <User
                            key={idx}
                            user={user}
                            kitchens={kitchens}
                            roles={roles}
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
                        Редактировать Пользователя
                    </h2>
                    <EditUserForm
                        closeModal={() => setIsModalOpen(false)}
                        user={current}
                        kitchens={kitchens}
                        roles={roles}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default UserList;
