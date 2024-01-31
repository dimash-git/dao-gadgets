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
        "textarea",
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
