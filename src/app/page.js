import HeroSection from "../components/HeroSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import ProductsSection from "../components/ProductsSection";
import BusinessPartners from "../components/BusinessPartners";
import AboutSection from "../components/AboutSection";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <ProductsSection />
      <BusinessPartners />
      <AboutSection />
      <ContactCTA />
    </>
  );
}
