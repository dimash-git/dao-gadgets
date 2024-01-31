import InputLabel from "@/Components/InputLabel.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import Textarea from "@/Components/Textarea.jsx";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";
import InputError from "@/Components/InputError";

const SettingForm = ({
    formData,
    onChange,
    onSubmit,
    errors,
    kitchens,
    children,
}) => {
    return (
        <form onSubmit={onSubmit} className="w-full space-y-4">
            <div>
                <TextInput
                    value={formData.title}
                    onChange={(e) => onChange("title", e.target.value)}
                    placeholder="Название параметра"
                />
            </div>
            <div>
                <TextInput
                    value={formData.name}
                    onChange={(e) => onChange("name", e.target.value)}
                    placeholder="Имя"
                />
            </div>
            <div>
                <TextInput
                    value={formData.value}
                    onChange={(e) => onChange("value", e.target.value)}
                    placeholder="Значение"
                />
            </div>
            <div>
                <Select
                    options={kitchens}
                    setSelected={(value) => onChange("kitchen_id", value.id)}
                    selected={kitchens.find(
                        (k) => k.id === formData.kitchen_id
                    )} // возвращает обьект выбранного дома
                    placeholder="Выберите Дом"
                />
            </div>
            <div>
                <Textarea
                    placeholder="Описание"
                    value={formData.description}
                    onChange={(e) => onChange("description", e.target.value)}
                    isFocused={false}
                />
            </div>
            <div>
                <InputLabel className="flex gap-2 items-center">
                    <Checkbox
                        checked={formData.active}
                        onChange={(e) =>
                            onChange("active", e.target.checked ? 1 : 0)
                        }
                    />
                    Активность
                </InputLabel>
            </div>

            <div>{children}</div>

            {errors && (
                <div className="text-red-500 mt-2">
                    {Object.keys(errors).map((key) => (
                        <InputError key={key}>{errors[key]}</InputError>
                    ))}
                </div>
            )}
        </form>
    );
};

export default SettingForm;
