import NewsCard from "../components/NewsCard";
import newsData from "../data/newsData";

const NewsSection = () => {
  return (
    <div>
      <div className="h2 text-center">LATEST NEWS</div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 15,
            height: 15,
            backgroundColor: "#00c0e4",
            borderRadius: "2px", // optional, if you want slightly rounded corners
          }}
        ></div>
        <div className="opacity-75">INTERGER CONGUE ELIT</div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "4rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {newsData.map((item, index) => {
          return <NewsCard singleNewsData={item} index={index}></NewsCard>;
        })}
      </div>
    </div>
  );
};

export default NewsSection;
