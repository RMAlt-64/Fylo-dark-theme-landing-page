
export const Additionalinformation = () => {
    return (

        <div className="flex flex-col items-center gap-8 my-[140px]">
            <img src="./src/assets/images/illustration-stay-productive.png" alt="illustration-stay-productive" />
            <h2 className="font-bold">Stay productive, wherever you are</h2>
            <p className="text-sm">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p className="text-sm">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>

            <div className="">
                <a className="flex gap-2" href="#">
                    <p className="text-xs text-cyan-500" >See how Fylo works</p>
                    <img src="./src/assets/images/icon-arrow.svg" alt="icon-arrow" />
                </a>
            </div>
        </div>


    );
}

