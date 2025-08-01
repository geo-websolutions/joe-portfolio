import Home from "@/components/Home";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Work from "@/components/Work";

export default function HomePage() {
  return (
    <main className="">
      <Home />
      <Services />
      <About />
      <Contact />
      <Work />
    </main>
  );
}
