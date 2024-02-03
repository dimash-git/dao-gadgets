import { cn } from "@/lib/utils";
import { usePage } from "@inertiajs/react";
import { useContext, useEffect } from "react";
import { SectionDeviceContext } from "../_context/section-device-context";

const Section = ({ section, selected, setSelected }) => {
    return (
        <button
            onClick={() => setSelected(section)}
            className={cn(
                "outline-none rounded-full border border-[#9faec0] px-4 h-11 text-[14px] leading-4 text-app-gray",
                selected?.eng === section?.eng
                    ? "orange-gradient text-white border-transparent"
                    : null
            )}
        >
            {section?.name}
        </button>
    );
};

const SectionList = () => {
    const { kitchen } = usePage().props;
    const { sections } = kitchen;

    const allSections = [{ name: "Все устройства", eng: "all" }, ...sections];

    const { sectionType, setSectionType } = useContext(SectionDeviceContext);

    useEffect(() => {
        setSectionType(allSections[0]);
    }, []);

    return (
        <div className="w-full flex gap-x-2">
            {allSections?.length > 0 &&
                allSections.map((section, idx) => (
                    <Section
                        key={idx}
                        section={section}
                        setSelected={setSectionType}
                        selected={sectionType}
                    />
                ))}
        </div>
    );
};

export default SectionList;
