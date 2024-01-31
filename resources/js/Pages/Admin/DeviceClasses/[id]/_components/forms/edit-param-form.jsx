import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import ParamForm from "./param-form";

const EditParamForm = ({ setEditing, param }) => {
    const {
        id,
        name,
        intependent_title,
        default_value,
        topic,
        relay_duration,
        topic_read,
        run_this_code_on_change,
        val,
        description,
        yandex_properties,
        min,
        max,
        status_on,
        status_off,
        independent_device,
        type,
        in_scenario_active,
    } = deviceClass;

    const defaultValues = {
        id,
        name,
        intependent_title,
        default_value,
        topic,
        relay_duration,
        topic_read,
        run_this_code_on_change,
        val,
        description,
        yandex_properties,
        min,
        max,
        status_on,
        status_off,
        independent_device,
        type,
        in_scenario_active,
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

        patch(route("device-class-values.update", deviceClass.id), {
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
                toast.error("Ошибка!", {
                    position: "bottom-right",
                    reverseOrder: true,
                });
                console.error(errors);
            },
        });
    };
    return (
        <ParamForm
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
        </ParamForm>
    );
};

export default EditParamForm;
