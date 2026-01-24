import { ExportLocalitation } from "./ExportLocalitation";
import { ListaContact } from "./ListaContact";

const pages: string[] = [
    "About Us",
    "Jobs",
    "Press",
    "Blog",
]

const contact: string[] = [
    "Contact Us",
    "Terms",
    "Privacy",
]
interface LocalitationProps {
    logo: string;
    text: string;
}

const contactDetails: LocalitationProps[] = [
    { logo: "./src/assets/images/icon-location.svg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit, set do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { logo: "./src/assets/images/icon-phone.svg", text: "+1-543-123-4567" },
    { logo: "./src/assets/images/icon-email.svg", text: "example@fylo.com" },
]

export const Footer = () => {
    return (
        <footer>

            <img src={"./src/assets/images/logo.svg"} alt="Logo" className="w-[198px] h-[60px] mb-16" />
            <div className="flex flex-col items-start gap-8 mb-16 ">
                {contactDetails.map((contactDetail: LocalitationProps) => (
                    <ExportLocalitation key={contactDetail.logo} {...contactDetail} />
                ))}
            </div>




            <div className="flex flex-col">
                <ul className="flex flex-col items-start gap-5 mb-16">
                    {pages.map((page) => (
                        <ListaContact key={page} text={page} />
                    ))}
                </ul>
                <ul className="flex flex-col items-start gap-5 mb-16">
                    {contact.map((contact) => (
                        <ListaContact key={contact} text={contact} />
                    ))}
                </ul>
            </div>
            <div className="flex gap-5 justify-center items-center">
                <img src="./src/assets/images/facebook-brands-solid-full.svg" alt="Icon Facebook" className="w-8 h-8 fill-white" />
                <img src="./src/assets/images/twitter-brands-solid-full.svg" alt="Icon Twitter" className="w-8 h-8 fill-white" />
                <img src="./src/assets/images/instagram-brands-solid-full.svg" alt="Icon Instagram" className="w-8 h-8 fill-white" />
            </div>

        </footer>
    )
}
