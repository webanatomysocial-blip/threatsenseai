import Cta from "../components/Cta";
import bg from "../assets/home/tab-section/bg-image.png";
import Blogs from "../components/Blog";

export default function BlogsPage() {
  return (
    <div>
      <Blogs limit="all" />
      <Cta
        title="Stay Ahead of Threats with
      AI-Powered Security"
        description="Protect your SAP® environments with real-time monitoring, 
              automated response, and deep threat analytics. Experience 
              the power of ThreatSense AI today!"
        backgroundImage={bg}
        buttonText="Get Started"
      />
    </div>
  );
}
