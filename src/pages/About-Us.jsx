import "../css/About-Us.css";
import AboutBanner from "../components/AboutBanner";
import LogoCarousel from "../components/LogoCarousel";
import AboutStats from "../components/AboutStats";
import HowItWorks from "../components/HowItWorks";

export default function AboutUs() {
  return (
    <div>
      <AboutBanner />
      <LogoCarousel />
      <AboutStats />
      <HowItWorks />
    </div>
  );
}
