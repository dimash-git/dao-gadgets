import { useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import SectionForm from "./section-form";
import { kitchenSectionTypes } from "@/constants/kitchen-section";

const AddSectionForm = () => {
    const { kitchen } = usePage().props;

    const defaultValues = {
        name: "",
        is_active: 0,
        kitchen_id: kitchen?.id,
        parent_id: null,
        type: kitchenSectionTypes[0]?.value ?? "room",
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
        console.log("FormData", data);

        post(route("kitchen-sections.store"), {
            // Reload only 'settings'
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
        <SectionForm
            formData={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
        >
            <PrimaryButton type="submit">Добавить настройку</PrimaryButton>
        </SectionForm>
    );
};

export default AddSectionForm;
