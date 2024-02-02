import { Link, useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import NewsForm from "./news-form";
// import DangerButton from "@/Components/DangerButton";

const EditNewsForm = ({ news, kitchens }) => {
    const { kitchens: news_kitchens, title, description } = news;

    const kitchen_ids = news_kitchens.map((kitchen) => kitchen?.id);

    const defaultValues = {
        kitchen_ids: kitchen_ids ?? [],
        title,
        description,
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

        patch(route("news.update", news.id), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast.success("Новость успешно изменена!", {
                    position: "bottom-right",
                    reverseOrder: true,
                });
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
        <NewsForm
            formData={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
            kitchens={kitchens}
        >
            <PrimaryButton>Сохранить</PrimaryButton>
            <Link
                as="button"
                href={route("news.destroy", news.id)}
                method="delete"
            >
                Удалить
            </Link>
            {/* <DangerButton
                onClick={() => route("news.destroy", news.id)}
                type="button"
            >
                Удалить
            </DangerButton> */}
        </NewsForm>
    );
};

export default EditNewsForm;
