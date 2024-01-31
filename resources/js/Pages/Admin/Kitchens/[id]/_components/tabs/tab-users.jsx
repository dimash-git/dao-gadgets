import { usePage } from "@inertiajs/react";

import AddUserForm from "@/Pages/Admin/Users/_components/forms/add-user-form";
import User from "@/Pages/Admin/Users/_components/user";

const TabUsers = () => {
    const { kitchen, kitchens, roles } = usePage().props;

    const { users } = kitchen;

    console.log(kitchen);

    return (
        <>
            <h2 className="workarea__subtitle">Добавить пользователя</h2>
            <AddUserForm kitchen={kitchen} />
            <h2 className="workarea__subtitle">Все пользователи</h2>
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
                    {users.map((user, idx) => (
                                <User
                                    key={idx}
                                    user={user}
                                    kitchens={kitchens}
                                    roles={roles}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TabUsers;
