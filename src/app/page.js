import HeroSection from "../components/HeroSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <ProductsSection />
      <AboutSection />
      <ContactCTA />
    </>
  );
}
