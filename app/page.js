import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Manifesto from "@/components/Manifesto";
import PainPoints from "@/components/PainPoints";
import EN54Spotlight from "@/components/EN54Spotlight";
import Certifications from "@/components/Certifications";
import Partners from "@/components/Partners";
import Trust from "@/components/Trust";
import CtaBand from "@/components/CtaBand";
import GoogleReviews from "@/components/GoogleReviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Manifesto />
      {/* Einbruchschutz vor Brandschutz: EN54Spotlight behandelt ausschließlich
          Brandmeldenormen und stand bisher an dieser Stelle allein. */}
      <PainPoints />
      <EN54Spotlight />
      <Certifications />
      <CtaBand />
      <Partners />
      <Trust />
      <GoogleReviews />
      <Contact />
    </>
  );
}
