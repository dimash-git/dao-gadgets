import clsx from "clsx";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={clsx(
                "primary-button",
                disabled ? "primary-button_disabled" : null,
                className
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
