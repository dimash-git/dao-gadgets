import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import SettingForm from "./setting-form";

const EditSettingForm = ({ setEditing, setting, kitchens }) => {
    const { name, value, kitchen_id, title, description, active } = setting;
    const defaultValues = {
        name,
        value,
        kitchen_id,
        title,
        description,
        active,
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

        patch(route("settings.update", setting.id), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast.success("Параметр успешно изменен!", {
                    position: "bottom-right",
                    reverseOrder: true,
                });
                setEditing(false);
            },
            onError: (errors) => {
                console.error(errors);
                toast.error("Ошибка!", {
                    position: "bottom-right",
                    reverseOrder: true,
                });
            },
        });
    };
    return (
        <SettingForm
            formData={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
            kitchens={kitchens}
        >
            <div className="space-x-2">
                <PrimaryButton>Сохранить</PrimaryButton>
                <button onClick={() => setEditing(false) && reset()}>
                    Отменить
                </button>
            </div>
        </SettingForm>
    );
};

export default EditSettingForm;
