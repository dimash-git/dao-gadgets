import { createContext, useState } from "react";

const SectionDeviceContext = createContext({});

const SectionDeviceProvider = ({ children }) => {
    const [sectionType, setSectionType] = useState({});
    const [deviceType, setDeviceType] = useState({});

    return (
        <SectionDeviceContext.Provider
            value={{ sectionType, setSectionType, deviceType, setDeviceType }}
        >
            {children}
        </SectionDeviceContext.Provider>
    );
};

export { SectionDeviceContext, SectionDeviceProvider };
