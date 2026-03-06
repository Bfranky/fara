import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OfferBanner from "@/components/OfferBanner";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main>
      <OfferBanner />
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Rooms />
      <Amenities />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
