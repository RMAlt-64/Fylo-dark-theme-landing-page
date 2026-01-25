import { Features, Header, Hero, Additionalinformation, Testimonials, Form, Footer } from "./components/index";




function App() {


  return (

    <main className="m-auto">
      <section className="bg-Navy-800 p-2 h-[420px] relative md:h-[640px]" >
        <Header />
        <img className="relative z-10 mt-12 m-auto w-[350px]  md:max-w-[450px]" src="/images/illustration-intro.png" alt="illustration" />
        <img className="absolute left-0 bottom-0 w-full -mb-12" src="/images/bg-curvy-mobile.svg" alt="bg-curvy" />
      </section>
      <section className="bg-Navy-900 p-6 pb-[300px]">
        <Hero />
        <Features />
        <Additionalinformation />
        <Testimonials />
      </section>
      <section className="bg-Navy-950 p-6 relative">
        <Form />
      </section>
      <section className="bg-Navy-950 p-6 pt-[200px]">
        <Footer />
      </section>
    </main>


  )
}

export default App
