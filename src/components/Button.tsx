interface ButtonProps {
    text: string;
    style?: string;
}



export const Button = ({ text, style = "" }: ButtonProps) => {
    return (
        <button className={`bg-linear-to-b from-Teal-200 to-Cyan-500 rounded-3xl px-4 py-2 text-sm h-12 hover:to-Teal-200 cursor-pointer ${style}`}>{text}</button>
    )
}