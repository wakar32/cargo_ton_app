import clientLogoData from "../data/clientLogoData";
const ClientLogosSection = () => {
  return (
    <div>
      {clientLogoData.map((item) => {
        return <img src={item.imageUrl} />;
      })}
    </div>
  );
};

export default ClientLogosSection;
