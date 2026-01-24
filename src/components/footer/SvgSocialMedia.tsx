interface SvgSocialMediaProps {
    dir: string;
}

export const SvgSocialMedia = ({ dir }: SvgSocialMediaProps) => {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 640" className="size-8 cursor-pointer hover:text-Teal-200 border rounded-full text-white mr-2 p-1">
            <path d={dir} />
        </svg>



    )
}
