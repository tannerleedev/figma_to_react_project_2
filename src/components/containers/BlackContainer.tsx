import type { ReactNode } from "react"

function BlackContainer({ children }: { children: ReactNode }) {
    return (
        <div className="bg-zinc-900 text-white rounded-b-4xl">
            {children}
        </div>
    )
}

export default BlackContainer