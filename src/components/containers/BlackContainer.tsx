import type { ReactNode } from "react"

function BlackContainer({ children, curvePosition = "bottom" }: { children: ReactNode, curvePosition?: string }) {

    const roundedStyle = curvePosition === "top" ? "rounded-t-4xl" : "rounded-b-4xl"

    return (
        <div className={`bg-zinc-900 text-white ${roundedStyle}`}>
            {children}
        </div>
    )
}

export default BlackContainer