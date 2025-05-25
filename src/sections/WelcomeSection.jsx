import WelcomeCard from "../components/WelcomeCard";
import welcomeData from "../data/welcomeData";

const WelcomeSection = () => {
  return <WelcomeCard welcomeData={welcomeData[0]}></WelcomeCard>;
};

export default WelcomeSection;
