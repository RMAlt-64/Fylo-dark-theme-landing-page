
import { Button } from "./Button"

export const Hero = () => {
  return (
    <section className="-mt-20 relative z-10">
      <h1 className="text-center text-2xl font-Raleway font-bold px-2">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="text-center px-4 text-sm mt-6">
        Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
      </p>
      <div className="flex justify-center mt-6 mb-12">
        <Button text="Get Started" style="w-[240px]" />
      </div>
    </section>
  )
}
