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

export const Footer = () => {
    return (
        <footer>
            <ExportLocalitation />

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
