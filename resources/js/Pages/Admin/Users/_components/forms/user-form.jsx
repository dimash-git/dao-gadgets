import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";
import InputError from "@/Components/InputError";

const UserForm = ({
    formData,
    onChange,
    onSubmit,
    errors,
    roles,
    kitchens,
    children,
}) => {
    return (
        <form onSubmit={onSubmit} className="w-full space-y-4">
            <div>
                <TextInput
                    value={formData.name}
                    onChange={(e) => onChange("name", e.target.value)}
                    placeholder="Имя"
                />
            </div>
            <div>
                <TextInput
                    value={formData.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    placeholder="Email"
                />
            </div>
            <div>
                <TextInput
                    type="password"
                    value={formData.password}
                    onChange={(e) => onChange("password", e.target.value)}
                    placeholder="Пароль"
                />
            </div>
            <div>
                <Select
                    options={roles}
                    setSelected={(value) => onChange("role", value.name)}
                    selected={roles.find((role) => role.name === formData.role)} // возвращает обьект выбранной роли
                    placeholder="Выберите Роль"
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

export default UserForm;
