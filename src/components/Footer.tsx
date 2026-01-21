
export const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col gap-4 mb-25">
                <div className="flex mb-6">
                    <img src="./src/assets/images/logo.svg" alt="Logo" className="w-[198px] h-[60px]" />
                </div>

                <div className="flex flex-row items-start gap-6 p-2">
                    <img src="./src/assets/images/icon-location.svg" alt="Icon Location" className="w-5 h-4" />
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit, set do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex flex-row items-center gap-6">
                    <img src="./src/assets/images/icon-phone.svg" alt="Icon Phone" className="w-5 h-4" />
                    <p>+1-543-123-4567</p>

                </div>
                <div className="flex flex-row items-center gap-6">
                    <img src="./src/assets/images/icon-email.svg" alt="Icon Email" className="w-5 h-4" />
                    <p>example@fylo.com</p>

                </div>
            </div>
            <div className="flex flex-col items-start gap-5 mb-16">
                <p>About Us</p>
                <p>Jobs</p>
                <p>Press</p>
                <p>Blog</p>
            </div>
            <div className="flex flex-col items-start gap-5 mb-16">
                <p>Contact Us</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
            <div className="flex gap-5 justify-center items-center">
                <img src="./src/assets/images/facebook-brands-solid-full.svg" alt="Icon Facebook" className="w-8 h-8 fill-white" />
                <img src="./src/assets/images/twitter-brands-solid-full.svg" alt="Icon Twitter" className="w-8 h-8 fill-white" />
                <img src="./src/assets/images/instagram-brands-solid-full.svg" alt="Icon Instagram" className="w-8 h-8 fill-white" />
            </div>

        </footer>
    )
}
