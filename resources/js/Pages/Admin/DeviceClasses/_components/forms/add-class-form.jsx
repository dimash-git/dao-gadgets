import { useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import ClassForm from "./class-form";

const AddClassForm = () => {
    const defaultValues = {
        name: "",
        type: "",
        description: "",
        division_into_devices: "",
        crutch_rgb_backlight: "",
        device_parameters: "",
        is_service: 0,
    };
    const { data, setData, post, errors } = useForm(defaultValues);

    /*
     * Handlers
     */
    const handleChange = (field, value) => {
        setData({ ...data, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("FormData", data);

        post(route("device-classes.store"), {
            // Reload only 'users'
            preserveState: true,
            onSuccess: () => {
                toast.success("Класс успешно добавлен!", {
                    position: "bottom-center",
                    reverseOrder: true,
                });
                setData(defaultValues);
            },
            onError: (errors) => {
                console.error(errors);
                toast.error("Ошибка!", {
                    position: "bottom-center",
                    reverseOrder: true,
                });
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
            <PrimaryButton type="submit">Добавить класс</PrimaryButton>
        </ClassForm>
    );
};

export default AddClassForm;
