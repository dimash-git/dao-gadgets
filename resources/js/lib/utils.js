import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

/**
 * Обертка для кривой инертии
 *
 * @param setData
 * @returns {(function(*, *): void)|*}
 */
export const  patchedSetData = (setData)=>(key, value)=>

        setData((values)=>({
            ...values,
            [key]:value
        }))



