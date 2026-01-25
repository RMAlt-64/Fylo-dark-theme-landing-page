import { CardsTestimonials } from "./CardsTestimonials";


export const Testimonials = () => {
    return (
        <div className="relative w-[320px] md:w-[420px] mx-auto">
            <img src="/images/bg-quotes.png" alt="bg-quotes" className="w-8 h-6 z-10 absolute left-2 -top-6 " />
            <div className="">
                <CardsTestimonials />
            </div>
        </div>
    );
}