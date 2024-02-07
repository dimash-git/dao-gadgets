import { useState } from "react";

import Modal from "@/Components/Modal";
import AddDeviceForm from "./device/forms/add-device-form";
import EditDeviceForm from "./device/forms/edit-device-form";
import KitchenSectionDisclosure from "./kitchen-section/kitchen-section-disclosure";

const Tree = ({ tree }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deviceAction, setDeviceAction] = useState("add" | "edit");
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <>
            <div className="mt-4 bg-purple-100 rounded-xl p-2 max-w-lg">
                {tree.map((section, idx) => (
                    <KitchenSectionDisclosure
                        key={idx}
                        kitchenSection={section}
                        setDeviceAction={setDeviceAction}
                        openModal={() => setIsModalOpen(true)}
                        setSelectedItem={setSelectedItem}
                    />
                ))}
            </div>
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="p-4">
                    {deviceAction ? (
                        deviceAction === "add" ? (
                            <>
                                <h2 className="text-lg leading-5 font-semibold mb-8">
                                    Новый Девайс
                                </h2>
                                <AddDeviceForm
                                    onClose={() => setIsModalOpen(false)}
                                    section={selectedItem}
                                />
                            </>
                        ) : (
                            <>
                                <h2 className="text-lg leading-5 font-semibold mb-8">
                                    Редактировать Девайс
                                </h2>
                                <EditDeviceForm
                                    onClose={() => setIsModalOpen(false)}
                                    device={selectedItem}
                                />
                            </>
                        )
                    ) : (
                        <>No action set.</>
                    )}
                </div>
            </Modal>
        </>
    );
};

export default Tree;
