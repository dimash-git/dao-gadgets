import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import ClassForm from "./class-form";

const EditClassForm = ({ deviceClass, closeModal = null }) => {
    const {
        name,
        type,
        description,
        division_into_devices,
        crutch_rgb_backlight,
        device_parameters,
        is_service,
    } = deviceClass;

    const defaultValues = {
        name,
        type,
        description,
        division_into_devices,
        crutch_rgb_backlight,
        device_parameters,
        is_service,
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
        <ClassForm
            formData={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
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
        </ClassForm>
    );
};

export default EditClassForm;
