import type { LocalitationProps } from "./types";
import type { featuresProps } from "./types";

export const pages: string[] = [
    "About Us",
    "Jobs",
    "Press",
    "Blog",
]

export const contact: string[] = [
    "Contact Us",
    "Terms",
    "Privacy",
]

export const contactDetails: LocalitationProps[] = [
    { logo: "/images/icon-location.svg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit, set do eiusmod tempor incididunt ut labore et dolore magna aliqua.", className: "flex items-start gap-8" },
    { logo: "/images/icon-phone.svg", text: "+1-543-123-4567", className: "flex items-center gap-8" },
    { logo: "/images/icon-email.svg", text: "example@fylo.com", className: "flex items-center gap-8" },
]

export const features: featuresProps[] = [
    {
        title: "Access your files, anywhere",
        description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        icon: "/images/icon-access-anywhere.svg"

    },
    {
        title: "Security you can trust",
        description: "2-factor authentication and user-controlled encryption are just a couple of the features we allow to help secure your files.",
        icon: "/images/icon-security.svg"

    },
    {
        title: "Real-time collaboration",
        description: "Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required.",
        icon: "/images/icon-collaboration.svg"

    },
    {
        title: "Fylo file storage",
        description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        icon: "/images/icon-any-file.svg"

    }
]