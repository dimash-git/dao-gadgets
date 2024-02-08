import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DeviceDisclosure from "../device/device-disclosure";
import { useState } from "react";
import { useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";

const KitchenSectionDisclosure = ({
    kitchenSection,
    openModal,
    setDeviceAction,
    setSelectedItem,
}) => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        // задаем initial state для девайсов только когда прогрузилась инфа об секции
        if (kitchenSection?.devices.length <= 0) return;

        // сортируем по "order"
        const sortedDevices = kitchenSection.devices.sort(
            (a, b) => a.order - b.order
        );

        // задаем девайсы в наш стейт
        setDevices(sortedDevices);
    }, [kitchenSection]);

    const onDragEnd = (result) => {
        const { source, destination } = result;

        // Проверяем если элемент был дропнут в зоне дропа и если он сдвинулся продолжаем
        if (!destination || source.index === destination.index) {
            return;
        }

        // Меняем порядок
        const newDevices = Array.from(devices);
        // Вырезаем устройства из списка с помощью деконструкции
        const [reorderedDevice] = newDevices.splice(source.index, 1);
        newDevices.splice(destination.index, 0, reorderedDevice);

        // Обновляем наш стейт
        setDevices(newDevices);

        // Делаем новую очередь и отправляем запрос в бэк
        const newOrder = newDevices.map((device) => device.id);
        updateDeviceOrder(kitchenSection.id, newOrder);
    };

    const updateDeviceOrder = (sectionId, deviceIds) => {
        Inertia.post(
            route("devices.updateOrder"),
            { sectionId, deviceIds },
            {
                onSuccess: () => {
                    console.log("Order updated successfully");
                    toast.success("Порядок успешно изменен!", {
                        position: "bottom-right",
                        reverseOrder: true,
                    });
                },
                onError: () => {
                    console.log("There was an error updating the order");
                    toast.error("Ошибка!", {
                        position: "bottom-right",
                        reverseOrder: true,
                    });
                },
            }
        );
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Disclosure>
                {({ open }) => (
                    <>
                        <div className="flex w-full rounded-lg items-center p-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                            <div className="flex items-center justify-between w-full">
                                <Disclosure.Button
                                    className={clsx(
                                        "flex items-center space-x-1 cursor-pointer"
                                    )}
                                >
                                    <ChevronRightIcon className="h-6 w-6 text-purple-400 mr-1" />
                                    <span>{kitchenSection?.name}</span>
                                </Disclosure.Button>

                                <button
                                    className="p-1 group hover:bg-slate-100 transition-all rounded-full"
                                    onClick={() => {
                                        setDeviceAction("add");
                                        setSelectedItem(kitchenSection);
                                        openModal();
                                    }}
                                >
                                    <PlusCircleIcon className="h-6 w-6 group-hover:text-purple-500 transition-all" />
                                </button>
                            </div>
                        </div>
                        <Disclosure.Panel className="px-4 text-sm text-gray-500">
                            <Droppable droppableId={String(kitchenSection.id)}>
                                {(provided) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {devices.length > 0 &&
                                            devices.map((device, idx) => (
                                                <Draggable
                                                    draggableId={String(idx)}
                                                    index={idx}
                                                    key={idx}
                                                >
                                                    {(provided) => (
                                                        <div
                                                            ref={
                                                                provided.innerRef
                                                            }
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <DeviceDisclosure
                                                                key={idx}
                                                                device={device}
                                                                setDeviceAction={
                                                                    setDeviceAction
                                                                }
                                                                openModal={
                                                                    openModal
                                                                }
                                                                setSelectedDevice={
                                                                    setSelectedItem
                                                                }
                                                            />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </DragDropContext>
    );
};

export default KitchenSectionDisclosure;
