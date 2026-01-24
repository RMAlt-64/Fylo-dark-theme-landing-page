
interface LocalitationProps {
    logo: string;
    text: string;
}






export const ExportLocalitation = ({ logo, text }: LocalitationProps) => {
    return (
        <div className="">
            <div className="flex items-center gap-8">
                <img src={logo} alt="Logo" className="" />
                <p className="">{text}</p>
            </div>
        </div>
    )
}
