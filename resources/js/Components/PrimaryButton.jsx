export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `primary-button ${
                    disabled && 'primary-button_disabled'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
