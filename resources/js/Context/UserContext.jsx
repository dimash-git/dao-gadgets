import { createContext, useState } from "react";

const UserContext = createContext({});
// создаем контекст и провайдер

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    // значение и метод обновления значения даем в провайдер как value
    // обварачиваем приложение в эту обертку в app.jsx
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
