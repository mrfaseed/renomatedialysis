import HeroSection from "../components/HeroSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import ProductsSection from "../components/ProductsSection";
import BusinessPartners from "../components/BusinessPartners";
import OurIndustry from "../components/OurIndustry";
import AboutSection from "../components/AboutSection";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <ProductsSection />
      <BusinessPartners />
      <OurIndustry />
      <AboutSection />
      <ContactCTA />
    </>
  );
}
