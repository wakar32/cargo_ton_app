const NewsCard = ({ singleNewsData, index }) => {
  return (
    <div
      className="position-relative d-flex flex-row"
      style={{
        width: 468,
        height: 195,
        color: index === 0 ? "white" : "#45535d",
      }}
    >
      <div
        className="position-fixed"
        style={{
          zIndex: 2,
          background: index === 0 ? "#00c0e4" : "#3f4c56",
          color: "white",
          width: 39,
          height: 39,
        }}
      >
        <div className="h6">{singleNewsData.date}</div>
        <div
          className="h6"
          style={{ fontSize: 10, position: "relative", top: -10 }}
        >
          {singleNewsData.month}
        </div>
        {/* <div style={{ fontSize: 20 }}>{singleNewsData.date}</div>
        <div style={{ fontSize: 10 }}>{singleNewsData.month}</div> */}
      </div>
      <div>
        <img
          alt=""
          src={singleNewsData.imageUrl}
          style={{ width: 234, height: 195 }}
        />
      </div>
      <div
        className="d-flex flex-column justify-content-around px-3 "
        style={{
          background: index === 0 ? "#00c0e4" : "#f5f5f5",
          textAlign: "start",
        }}
      >
        <div style={{ fontWeight: 500 }}>{singleNewsData.title}</div>
        <div className="d-flex" style={{ fontSize: 10 }}>
          <div style={{ paddingRight: 16 }}>{singleNewsData.role}</div>
          {index === 0 ? (
            <img
              src="/icons/NewsSection/comment-discussion-white.svg"
              alt="Logo"
              style={{ width: "0.75rem" }}
            />
          ) : (
            <img
              src="/icons/NewsSection/comment-discussion-black.svg"
              alt="Logo"
              style={{ width: "0.75rem" }}
            />
          )}

          <div style={{ paddingLeft: 16 }}>{singleNewsData.commentCount}</div>
        </div>
        <div style={{ fontSize: 12, opacity: 0.8 }}>
          {singleNewsData.description}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
