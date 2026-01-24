
interface LocalitationProps {
    logo: string;
    text: string;
    className?: string;
}






export const ExportLocalitation = ({ logo, text, className }: LocalitationProps) => {
    return (

        <div className={className}>
            <img src={logo} alt="Logo" className="" />
            <p className="">{text}</p>
        </div>

    )
}
