
interface LocalitationProps {
    logo: string;
    location: string;
    phone: string;
    email: string;
}

const data: LocalitationProps[] = [
    {
        logo: "./src/assets/images/logo.svg",
        location: "./src/assets/images/icon-location.svg",
        phone: "./src/assets/images/icon-phone.svg",
        email: "./src/assets/images/icon-email.svg"
    }
]



export const ExportLocalitation = () => {
    return (
        <div className="flex flex-col gap-4 mb-25">
            <div className="flex mb-6">
                <img src={data[0].logo} alt="Logo" className="w-[198px] h-[60px]" />
            </div>

            <div className="flex flex-row items-start gap-6 p-2">
                <img src={data[0].location} alt="Icon Location" className="w-5 h-4" />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit, set do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="flex flex-row items-center gap-6">
                <img src={data[0].phone} alt="Icon Phone" className="w-5 h-4" />
                <p>+1-543-123-4567</p>

            </div>
            <div className="flex flex-row items-center gap-6">
                <img src={data[0].email} alt="Icon Email" className="w-5 h-4" />
                <p>example@fylo.com</p>

            </div>
        </div>
    )
}
