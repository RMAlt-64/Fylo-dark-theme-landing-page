import { Button } from "./index"

export const Form = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 bg-Navy-850 p-6 rounded-lg text-center absolute top-[-175px] left-[0rem] right-[0rem] mx-4 shadow-lg shadow-Cyan-500/50">
            <h1 className="font-bold">Get early access today</h1>
            <p className="text-[0.9rem] mb-6">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <form action="" className="flex flex-col gap-4 w-full">
                <input type="email" placeholder="email@example.com" className="bg-White text-Navy-850 rounded-full p-3 text-[0.625rem] h-12" />
                <Button text="Get started for free" style="font-bold" />
            </form>
        </div>
    )
}