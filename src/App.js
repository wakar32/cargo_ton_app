// import logo from "./logo.svg";
import "./App.css";
import HeaderSection from "./sections/HeaderSection";
import WelcomeSection from "./sections/WelcomeSection";
import OurServicesSection from "./sections/OurServicesSection";
import StatsSection from "./sections/StatsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ClientLogosSection from "./sections/ClientLogosSection";
import NewsSection from "./sections/NewsSection";
import FooterSection from "./sections/FooterSection";
import CarouselSection from "./sections/CarouselSection";

function App() {
  return (
    <div className="App">
      {/* <HeaderSection></HeaderSection>
      <CarouselSection></CarouselSection> */}
      <WelcomeSection></WelcomeSection>
      {/* <OurServicesSection></OurServicesSection> */}
      {/* <StatsSection></StatsSection>
      <TestimonialsSection></TestimonialsSection>
      <ClientLogosSection></ClientLogosSection>
      <NewsSection></NewsSection>
      <FooterSection></FooterSection> */}
    </div>
  );
}

export default App;
