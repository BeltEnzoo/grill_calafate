import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Restaurant } from "@/components/sections/Restaurant";
import { Events } from "@/components/sections/Events";
import { Shows } from "@/components/sections/Shows";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { InstagramSection } from "@/components/sections/Instagram";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Restaurant />
      <Events />
      <Shows />
      <Testimonials />
      <Gallery />
      <InstagramSection />
      <Contact />
    </>
  );
}
