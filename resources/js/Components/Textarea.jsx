import { forwardRef, useEffect, useRef } from "react";
import clsx from "clsx";

export default forwardRef(function Textarea(
    { className = "", isFocused = false, ...props },
    ref
) {
    const textareaRef = useRef();

    useEffect(() => {
        if (isFocused) {
            textareaRef.current.focus();
        }
    }, [isFocused]);

    const textareaClasses = clsx(
        "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full",
        className
    );

    return (
        <textarea
            {...props}
            className={textareaClasses}
            ref={ref || textareaRef}
        />
    );
});
