import { CardsTestimonials } from "./CardsTestimonials";


export const Testimonials = () => {
    return (
        <>
            <img src="./src/assets/images/bg-quotes.png" alt="bg-quotes" className="w-8 h-6" />
            <div className="bg-gray-300">
                <h2 className="font-bold">Testimonials</h2>
                <CardsTestimonials />
            </div>
        </>
    );
}