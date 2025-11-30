interface featuresProps {
    title: string;
    description: string;
    icon: string;
}
const features: featuresProps[] = [
    {
        title: "Access your files, anywhere",
        description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        icon: "./src/assets/images/icon-access-anywhere.svg"
    },
    {
        title: "Security you can trust",
        description: "2-factor authentication and user-controlled encryption are just a couple of the features we allow to help secure your files.",
        icon: "./src/assets/images/icon-security.svg"
    },
    {
        title: "Real-time collaboration",
        description: "Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required.",
        icon: "./src/assets/images/icon-collaboration.svg"
    },
    {
        title: "Fylo file storage",
        description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        icon: "./src/assets/images/icon-any-file.svg"
    }
]

export const Features = () => {
    return (
        <div className="flex flex-col gap-20 mt-[140px]">
            {features.map((feature, index) => (
                <div className="flex flex-col items-center text-center" key={index}>
                    <img className="mb-10" src={feature.icon} alt={feature.title} />
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm">{feature.description}</p>

                </div>
            ))}
        </div>
    );
}
