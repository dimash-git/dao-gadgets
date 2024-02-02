import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function Select(props) {
    const {
        options,
        selected,
        setSelected,
        placeholder = "Выберите значение",
    } = props;
    return (
        <div className="select">
            <Listbox value={selected} onChange={setSelected}>
                <div className="select__container">
                    <Listbox.Button className="select__input">
                        <span className="select__selected-option">
                            {selected?.name || placeholder}
                        </span>
                        <span className="select__icon-container">
                            <ChevronUpDownIcon
                                className="select__icon"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="select__options-container">
                            {options.map((option, optionIdx) => (
                                <Listbox.Option
                                    key={optionIdx}
                                    className={({ active }) =>
                                        `select__option ${
                                            active
                                                ? "select__option_state_active"
                                                : ""
                                        }`
                                    }
                                    value={option}
                                >
                                    {({ selected }) => (
                                        <span
                                            className={
                                                selected
                                                    ? "select__option_state_selected"
                                                    : ""
                                            }
                                        >
                                            {option.name}
                                        </span>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}
