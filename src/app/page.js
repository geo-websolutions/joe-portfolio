import Home from "@/components/home/Home";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <main className="">
      <Home />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
