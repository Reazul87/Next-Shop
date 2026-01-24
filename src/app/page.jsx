import Bestsellers from "../components/shared/Bestsellers";
import FAQMultiple from "../components/shared/FAQ";
import Hero from "../components/shared/Hero";
import Newsletter from "../components/shared/Newsletter";
import PaymentMethods from "../components/shared/PaymentMethods";
import TeamSection from "../components/shared/TeamSection";
import Testimonials from "../components/shared/Testimonials";

export default function LandingPage() {
  return (
    <div className="bg-linear-to-br from-slate-50 to-blue-50">
      <Hero />
      <Bestsellers />
      <Testimonials />
      <TeamSection></TeamSection>
      <FAQMultiple></FAQMultiple>
      <PaymentMethods></PaymentMethods>
      <Newsletter />
    </div>
  );
}
