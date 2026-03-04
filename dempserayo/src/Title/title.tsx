import type { FC, PropsWithChildren } from "react"

export const Tittle: FC<PropsWithChildren> = ({children}) => {
    return (
        <p className="text-2xl font-thin text-neutral-800 drop-shadow-md drop-shadow-black">{children}</p>
    )
}