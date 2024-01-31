import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";
import InputError from "@/Components/InputError";
import InputLabel from"@/Components/InputLabel";

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
        <form onSubmit={onSubmit} className="workarea__form">

            {errors && (
                    Object.keys(errors).map((key) => (
                        <InputError key={key}>{errors[key]}</InputError>
                    ))
            )}

            <div className="workarea__input-container">
                <div className="workarea__input-row">
                    <InputLabel
                        value="Имя пользователя"
                        htmlFor="user.name"
                    />
                    <TextInput
                        value={formData.name}
                        id="user.name"
                        onChange={(e) => onChange("name", e.target.value)}
                        placeholder="Введите имя"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Email"
                        htmlFor="user.email"
                    />
                    <TextInput
                        value={formData.email}
                        id="user.email"
                        onChange={(e) => onChange("email", e.target.value)}
                        placeholder="Введите email"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Пароль"
                        htmlFor="user.password"
                    />
                    <TextInput
                        type="password"
                        id="user.password"
                        value={formData.password}
                        onChange={(e) => onChange("password", e.target.value)}
                        placeholder="Введите пароль"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Роль пользователя"
                        htmlFor="user.role"
                    />
                    <Select
                        id="user.role"
                        options={roles}
                        setSelected={(value) => onChange("role", value.name)}
                        selected={roles.find((role) => role.name === formData.role)} // возвращает обьект выбранной роли
                        placeholder="Выберите роль"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Дом"
                        htmlFor="user.kitchen"
                    />
                    <Select
                        id="user.kitchen"
                        options={kitchens}
                        setSelected={(value) => onChange("kitchen_id", value.id)}
                        selected={kitchens.find(
                            (k) => k.id === formData.kitchen_id
                        )} // возвращает обьект выбранного дома
                        placeholder="Выберите дом"
                    />
                </div>
            </div>
            
            <div>{children}</div>

        </form>
    );
};

export default UserForm;
