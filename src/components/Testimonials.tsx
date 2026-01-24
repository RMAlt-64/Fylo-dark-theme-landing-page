import { CardsTestimonials } from "./CardsTestimonials";


export const Testimonials = () => {
    return (
        <div className="relative">
            <img src="/images/bg-quotes.png" alt="bg-quotes" className="w-8 h-6 z-10 absolute left-2 -top-6 " />

            <div className="">
                <CardsTestimonials />
            </div>
        </div>
    );
}