
import type { LocalitationProps } from "./types";



export const ExportLocalitation = ({ logo, text, className }: LocalitationProps) => {
    return (

        <div className={className}>
            <img src={logo} alt="Logo" className="" />
            <p className="md: w-[200px]">{text}</p>
        </div>
    )
}
