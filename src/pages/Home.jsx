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
      <OurSolutions id="solutions" />
      <CustomOptions />
      <KeyFeatures />
      <CustomerFeedback />
      <Cta
        title="Built to stop insider threats, 
        data leaks, and security failures."
        description="AI-powered cybersecurity and data security for SAP and enterprise environments.
Detect threats, deter misuse, and defend sensitive data in real time."
        backgroundImage={bg}
        buttonText="Book a Demo"
      />
    </>
  );
}
