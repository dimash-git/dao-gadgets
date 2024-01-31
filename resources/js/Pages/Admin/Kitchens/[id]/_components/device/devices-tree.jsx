import { useState } from "react";

import Modal from "@/Components/Modal";
import DevicesTreeDisclosure from "./devices-tree-disclosure";
import AddDeviceForm from "./forms/add-device-form";
import EditDeviceForm from "./forms/edit-device-form";

const DevicesTree = ({ tree }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deviceAction, setDeviceAction] = useState("add" | "edit");
    const [selectedParent, setSelectedParent] = useState(null);

    return (
        <>
            <div className="mt-4 bg-purple-100 rounded-xl p-2 max-w-lg">
                <DevicesTreeDisclosure
                    tree={tree}
                    openModal={() => setIsModalOpen(true)}
                    setSelectParent={setSelectedParent}
                    setDeviceAction={setDeviceAction}
                />
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
                                    section={selectedParent}
                                />
                            </>
                        ) : (
                            <>
                                <h2 className="text-lg leading-5 font-semibold mb-8">
                                    Редактировать Девайс
                                </h2>
                                <EditDeviceForm
                                    onClose={() => setIsModalOpen(false)}
                                    device={selectedParent}
                                />
                            </>
                        )
                    ) : (
                        <>asd</>
                    )}
                </div>
            </Modal>
        </>
    );
};

export default DevicesTree;
