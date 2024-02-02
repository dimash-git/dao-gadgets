import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

const KitchenForm = ({ formData, onChange, onSubmit, errors, children }) => {
    return (
        <form onSubmit={onSubmit} className="workarea__form">
            {errors &&
                Object.keys(errors).map((key) => (
                    <InputError key={key}>{errors[key]}</InputError>
                ))}

            <div className="workarea__input-container grid grid-cols-2">
                <div className="workarea__input-row">
                    <InputLabel value="Название дома" htmlFor="home.name" />
                    <TextInput
                        value={formData.name}
                        id="home.name"
                        placeholder="Введите название дома"
                        onChange={(e) => onChange("name", e.target.value)}
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Номер договора"
                        htmlFor="home.contract-number"
                    />
                    <TextInput
                        value={formData.contract_number}
                        id="home.contract-number"
                        placeholder="Введите номер договора"
                        onChange={(e) =>
                            onChange("contract_number", e.target.value)
                        }
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel value="Адрес" htmlFor="home.address" />
                    <TextInput
                        value={formData.address}
                        id="home.address"
                        placeholder="Введите адрес"
                        onChange={(e) => onChange("address", e.target.value)}
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Версия прошивки"
                        htmlFor="home.firmware-version"
                    />
                    <TextInput
                        value={formData.firmware_version}
                        id="home.firmware-version"
                        placeholder="Введите версию прошивки"
                        onChange={(e) =>
                            onChange("firmware_version", e.target.value)
                        }
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="MQTT Префикс"
                        htmlFor="home.mqtt-prefix"
                    />
                    <TextInput
                        value={formData.mqtt_prefix}
                        id="home.mqtt-prefix"
                        placeholder="MQTT Префикс"
                        onChange={(e) =>
                            onChange("mqtt_prefix", e.target.value)
                        }
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Настройки адресных лент (JSON)"
                        htmlFor="home.settings-addrledstrip"
                    />
                    <TextInput
                        value={formData.settings_addrledstrip}
                        id="home.settings-addrledstrip"
                        placeholder="Настройки адресных лент JSON"
                        onChange={(e) =>
                            onChange("settings_addrledstrip", e.target.value)
                        }
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Настройки кнопок (JSON)"
                        htmlFor="home.settings-button"
                    />
                    <TextInput
                        value={formData.settings_button}
                        id="home.settings-button"
                        placeholder="Настройки кнопок JSON"
                        onChange={(e) =>
                            onChange("settings_button", e.target.value)
                        }
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Настройки MAIN (JSON)"
                        htmlFor="home.settings-main"
                    />
                    <TextInput
                        value={formData.settings_general}
                        id="home.settings-main"
                        placeholder="Настройки MAIN (JSON)"
                        onChange={(e) =>
                            onChange("settings_general", e.target.value)
                        }
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Настройки мосфетов (JSON)"
                        htmlFor="home.settings-mosfet"
                    />
                    <TextInput
                        value={formData.settings_mosfet}
                        id="home.settings-mosfet"
                        placeholder="Настройки мосфетов JSON"
                        onChange={(e) =>
                            onChange("settings_mosfet", e.target.value)
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

export default KitchenForm;
