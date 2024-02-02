import { useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import NewsForm from "./news-form";

const AddNewsForm = () => {
    const { kitchens } = usePage().props;

    const kitchen_ids = kitchens.map((kitchen) => kitchen?.id);

    const defaultValues = {
        kitchen_ids: kitchen_ids ?? [],
        title: "",
        description: "",
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

        post(route("news.store"), {
            // Reload only 'users'
            preserveState: true,
            onSuccess: () => {
                toast.success("Пользователь успешно добавлен!", {
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
        <NewsForm
            formData={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
            kitchens={kitchens}
        >
            <PrimaryButton type="submit">Добавить новости</PrimaryButton>
        </NewsForm>
    );
};

export default AddNewsForm;
