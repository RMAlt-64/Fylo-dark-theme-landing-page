interface TestimonialsProps {
    image: string;
    name: string;
    position: string;
    testimonial: string;
}

const testimonials: TestimonialsProps[] = [
    {
        image: "/images/profile-1.jpg",

        name: "Satish Patel",
        position: "Founder & CEO, Huddle",
        testimonial: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
        image: "/images/profile-2.jpg",

        name: "Bruce McKenzie",
        position: "Founder & CEO, Huddle",
        testimonial: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
        image: "/images/profile-3.jpg",

        name: "Iva Boyd",
        position: "Founder & CEO, Huddle",
        testimonial: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
];

export const CardsTestimonials = () => {

    return (
        <div className="flex flex-col gap-6 items-center">
            {testimonials.map((testimonial: TestimonialsProps) => (
                <div className="rounded-sm bg-Navy-800 p-5" key={testimonial.name}>
                    <p className="text-[0.78rem] mb-5 font-OpenSans">{testimonial.testimonial}</p>
                    <div className="flex items-center">
                        <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-10 h-10 mr-3" />
                        <div>
                            <h3 className="font-bold text-[0.8rem] mb-1">{testimonial.name}</h3>
                            <p className="text-[0.6rem] font-OpenSans">{testimonial.position}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
