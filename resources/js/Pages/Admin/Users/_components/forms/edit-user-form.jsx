import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import UserForm from "./user-form";

const EditUserForm = ({ user, kitchens, roles, closeModal = null }) => {
    const { name, email, password, kitchen_id, roles: currentUserRoles } = user;

    const defaultValues = {
        name,
        email,
        password,
        kitchen_id,
        role: currentUserRoles[0].name,
    };
    const { data, setData, patch, errors, reset } = useForm(defaultValues);

    /*
     * Handlers
     */
    const handleChange = (field, value) => {
        setData({ ...data, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        patch(route("users.update", user.id), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast.success("Пользователь успешно изменен!", {
                    position: "bottom-right",
                    reverseOrder: true,
                });
                closeModal();
            },
            onError: (errors) => {
                toast.error("Ошибка!", {
                    position: "bottom-right",
                    reverseOrder: true,
                });
                console.error(errors);
            },
        });
    };
    return (
        <UserForm
            formData={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
            kitchens={kitchens}
            roles={roles}
        >
            <PrimaryButton>Сохранить</PrimaryButton>
            <button
                onClick={() => {
                    closeModal();
                    reset();
                }}
                type="button"
            >
                Отменить
            </button>
        </UserForm>
    );
};

export default EditUserForm;
