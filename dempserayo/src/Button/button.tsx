import type { FC, PropsWithChildren } from "react"

export const Button: FC<PropsWithChildren> = ({children}) => {
    return (
        <button className="w-20 h-10 border flex justify-center items-center bg-white hover:bg-white/20 transition-colors duration-500 cursor-pointer">
            <p className="text-xs font-thin text-neutral-800">
                {children}
            </p>
        </button>
    )
}