import HomeBanner from "../components/HomeBanner";
import CustomerFeedback from "../components/CustomerFeedback";
import HomeTabSection from "../components/HomeTabSection";
import SecurityHeadaches from "../components/SecurityHeadaches";
import OurSolutions from "../components/OurSolutions";
import CustomOptions from "../components/CustomOptions";
import KeyFeatures from "../components/KeyFeatures";

import Cta from "../components/Cta";
import bg from "../assets/home/tab-section/bg-image.png";

export default function Home() {
  return (
    <>
      <HomeBanner />

      <HomeTabSection />
      <SecurityHeadaches />
      <OurSolutions />
      <CustomOptions />
      <KeyFeatures />
      <CustomerFeedback />
      <Cta
        title="Stay Ahead of Threats with
AI-Powered Security"
        description="Protect your SAP® environments with real-time monitoring, 
        automated response, and deep threat analytics. Experience 
        the power of ThreatSense AI today!"
        backgroundImage={bg}
        buttonText="Get Started"
      />
    </>
  );
}
