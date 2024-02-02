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
        <form onSubmit={onSubmit} className="workarea__form">
            {errors &&
                Object.keys(errors).map((key) => (
                    <InputError key={key}>{errors[key]}</InputError>
                ))}

            <div className="workarea__input-container">
                <div className="workarea__input-row">
                    <InputLabel
                        value="Название параметра"
                        htmlFor="setting.title"
                    />
                    <TextInput
                        value={formData.title}
                        id="setting.title"
                        onChange={(e) => onChange("title", e.target.value)}
                        placeholder="Введите название параметра"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel value="Имя параметра" htmlFor="setting.name" />
                    <TextInput
                        value={formData.name}
                        id="setting.name"
                        onChange={(e) => onChange("name", e.target.value)}
                        placeholder="Введите имя параметра"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel value="Значение" htmlFor="setting.value" />
                    <TextInput
                        value={formData.value}
                        id="setting.value"
                        onChange={(e) => onChange("value", e.target.value)}
                        placeholder="Введите значение параметра"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel value="Дом" htmlFor="setting.kitchen" />
                    <Select
                        id="setting.kitchen"
                        options={kitchens}
                        setSelected={(value) =>
                            onChange("kitchen_id", value.id)
                        }
                        selected={kitchens.find(
                            (k) => k.id === formData.kitchen_id
                        )} // возвращает обьект выбранного дома
                        placeholder="Выберите дом"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Описание"
                        htmlFor="setting.description"
                    />
                    <Textarea
                        id="setting.description"
                        placeholder="Введите описание параметра"
                        value={formData.description}
                        onChange={(e) =>
                            onChange("description", e.target.value)
                        }
                        isFocused={false}
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel value="Активность" htmlFor="setting.active" />
                    <Checkbox
                        id="setting.active"
                        checked={formData.active}
                        onChange={(e) =>
                            onChange("active", e.target.checked ? 1 : 0)
                        }
                    />
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-4 w-full">
                {children}
            </div>
        </form>
    );
};

export default SettingForm;
