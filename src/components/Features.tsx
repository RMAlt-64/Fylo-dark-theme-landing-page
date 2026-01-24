import type { featuresProps } from "./footer/types";
import { features } from "./footer/constants";


export const Features = () => {
    return (
        <div className="flex flex-col gap-20 mt-[140px]">
            {features.map((feature: featuresProps, index: number) => (
                <div className="flex flex-col items-center text-center" key={index}>
                    <img className="mb-10" src={feature.icon} alt={feature.title} />
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm">{feature.description}</p>

                </div>
            ))}
        </div>
    );
}
