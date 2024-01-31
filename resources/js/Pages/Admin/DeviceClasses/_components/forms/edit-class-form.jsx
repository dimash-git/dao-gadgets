import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import ClassForm from "./class-form";

const EditClassForm = ({ setEditing, deviceClass }) => {
    const {
        name,
        type,
        description,
        division_into_devices,
        crutch_rgb_backlight,
        device_parameters,
    } = deviceClass;

    const defaultValues = {
        name,
        type,
        description,
        division_into_devices,
        crutch_rgb_backlight,
        device_parameters,
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

        patch(route("device-classes.update", deviceClass.id), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast.success("Класс успешно изменен!", {
                    position: "bottom-right",
                    reverseOrder: true,
                });
                setEditing(false);
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
        <ClassForm
            formData={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
        >
            <div className="space-x-2">
                <PrimaryButton>Сохранить</PrimaryButton>
                <button onClick={() => setEditing(false) && reset()}>
                    Отменить
                </button>
            </div>
        </ClassForm>
    );
};

export default EditClassForm;
