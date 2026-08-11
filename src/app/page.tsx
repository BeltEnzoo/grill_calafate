import { getShows } from "@/lib/get-shows";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Restaurant } from "@/components/sections/Restaurant";
import { Agencies } from "@/components/sections/Agencies";
import { Events } from "@/components/sections/Events";
import { Shows } from "@/components/sections/Shows";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { InstagramSection } from "@/components/sections/Instagram";
import { Contact } from "@/components/sections/Contact";

export default async function HomePage() {
  const { events, source } = await getShows();

  return (
    <>
      <Hero />
      <About />
      <Restaurant />
      <Agencies />
      <Events />
      <Shows events={events} source={source} />
      <Testimonials />
      <Gallery />
      <InstagramSection />
      <Contact />
    </>
  );
}
