import { useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import ParamForm from "./param-form";
import { deviceFrontTypes } from "@/constants/device";

const AddParamForm = () => {
    const { deviceClass } = usePage().props;

    const defaultValues = {
        id_device_class: deviceClass?.id,
        name: "",
        intependent_title: "",
        default_value: "",
        topic: "",
        relay_duration: "",
        topic_read: "",
        run_this_code_on_change: "",
        val: "",
        eng: "",
        description: "",
        yandex_properties: 0,
        min: "",
        max: "",
        status_on: "",
        status_off: "",
        independent_device: 0,
        type: "",
        in_scenario_active: 0,
        front_type: deviceFrontTypes[0]?.value,
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

        post(route("device-class-values.store"), {
            // Reload only 'users'
            preserveState: true,
            onSuccess: () => {
                toast.success("Параметр успешно добавлен!", {
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
        <ParamForm
            formData={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
        >
            <PrimaryButton type="submit">Добавить параметр</PrimaryButton>
        </ParamForm>
    );
};

export default AddParamForm;
