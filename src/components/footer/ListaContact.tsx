interface ListaContactProps {
    text: string;
}


export const ListaContact = ({ text }: ListaContactProps) => {
    return (
        <div>
            <ul>
                <li>
                    <a className="hover:text-Teal-200" href="">{text}</a>
                </li>
            </ul>
        </div>
    )
}
