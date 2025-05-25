import StatCard from "../components/StatCard";
import statData from "../data/statData";

const StatsSection = () => {
  return (
    <div className="d-flex justify-content-around">
      {statData.map((stat) => {
        return <StatCard signleStat={stat} />;
      })}
    </div>
  );
};

export default StatsSection;
