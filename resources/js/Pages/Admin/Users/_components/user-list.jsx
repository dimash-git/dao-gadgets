import { usePage } from "@inertiajs/react";

import User from "./user";
import InertiaPagination from "@/Components/InertiaPagination";

const UserList = () => {
    const { users, kitchens, roles } = usePage().props;

    return (
        <div className="flex flex-col gap-y-8">
            <div className="max-w-[1260px] mt-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {users.data.map((user, idx) => (
                        <User
                            key={idx}
                            user={user}
                            kitchens={kitchens}
                            roles={roles}
                        />
                    ))}
                    <InertiaPagination data={users} />
                </div>
            </div>
        </div>
    );
};

export default UserList;
