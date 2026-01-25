
import type { LocalitationProps } from "./types";



export const ExportLocalitation = ({ logo, text, styles = "" }: LocalitationProps) => {
    return (

        <div className={styles}>
            <img src={logo} alt="Logo" className="mt-1" />
            <p>{text}</p>
        </div>
    )
}
