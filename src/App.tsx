import { Features, Header, Hero, Additionalinformation, Testimonials } from "./components/index";




function App() {


  return (

    <main className="w-[375px] m-auto">
      <section className="bg-Navy-850 p-2 h-[420px] relative" >
        <Header />
        <img className="relative z-10" src="/images/illustration-intro.png" alt="illustration" />
        <img className="absolute left-0 bottom-0" src="/images/bg-curvy-mobile.svg" alt="bg-curvy" />
      </section>
      <section className="bg-Navy-900 p-6">
        <Hero />
        <Features />
        <Additionalinformation />
        <Testimonials />
      </section>
    </main>


  )
}

export default App
