interface TestimonialsProps {
    image: string;
    name: string;
    position: string;
    testimonial: string;
}

const testimonials: TestimonialsProps[] = [
    {
        image: "/src/assets/images/profile-1.jpg",
        name: "Satish Patel",
        position: "Founder & CEO, Huddle",
        testimonial: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
        image: "/src/assets/images/profile-2.jpg",
        name: "Bruce McKenzie",
        position: "Founder & CEO, Huddle",
        testimonial: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
        image: "/src/assets/images/profile-3.jpg",
        name: "Iva Boyd",
        position: "Founder & CEO, Huddle",
        testimonial: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
];

export const CardsTestimonials = () => {

    return (
        <div>
            {testimonials.map((testimonial: TestimonialsProps) => (
                <div className="rounded-xs bg-gray-800 p-5">
                    <p className="font-OpenSans text-sm mb-5">{testimonial.testimonial}</p>
                    <div className="flex ">
                        <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-10 h-10 mr-3" />
                        <div>
                            <h3 className="font-bold font-OpenSans text-sm">{testimonial.name}</h3>
                            <p className="text-xs font-OpenSans">{testimonial.position}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
