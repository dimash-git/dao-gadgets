import TextInput from "@/Components/TextInput";
import Select from "react-select";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Textarea from "@/Components/Textarea";

const NewsForm = ({
    formData,
    onChange,
    onSubmit,
    errors,
    kitchens,
    children,
}) => {
    const handleFileChange = (e) => {
        onChange("cover", e.target.files[0]);
    };
    return (
        <form
            onSubmit={onSubmit}
            className="workarea__form"
            encType="multipart/form-data"
        >
            {errors &&
                Object.keys(errors).map((key) => (
                    <InputError key={key}>{errors[key]}</InputError>
                ))}

            <div className="workarea__input-container">
                <div className="workarea__input-row">
                    <InputLabel value="Кухни" htmlFor="news.kitchen_ids" />
                    <Select
                        id="news.kitchen_ids"
                        isMulti
                        options={kitchens.map((kitchen) => ({
                            value: kitchen.id,
                            label: kitchen.name,
                        }))}
                        onChange={(selectedOptions) => {
                            const selectedIds = selectedOptions
                                ? selectedOptions.map((option) => option.value)
                                : [];
                            onChange("kitchen_ids", selectedIds);
                        }}
                        value={
                            formData.kitchen_ids
                                ?.map((id) =>
                                    kitchens.find(
                                        (kitchen) => kitchen.id === id
                                    )
                                )
                                .filter(Boolean)
                                .map((kitchen) => ({
                                    value: kitchen.id,
                                    label: kitchen.name,
                                })) || []
                        }
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: "#f2f5f9",
                            }),
                        }}
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel value="Заголовок" htmlFor="user.title" />
                    <TextInput
                        value={formData.title}
                        id="user.title"
                        onChange={(e) => onChange("title", e.target.value)}
                        placeholder="Введите заголовок"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel value="Описание" htmlFor="user.description" />
                    <Textarea
                        id="user.description"
                        value={formData.description}
                        onChange={(e) =>
                            onChange("description", e.target.value)
                        }
                        placeholder="Введите описание"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel value="Обложка" htmlFor="news.cover" />
                    <input
                        type="file"
                        id="news.cover"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                    {errors?.cover && <InputError>{errors.cover}</InputError>}
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-4 w-full">
                {children}
            </div>
        </form>
    );
};

export default NewsForm;
