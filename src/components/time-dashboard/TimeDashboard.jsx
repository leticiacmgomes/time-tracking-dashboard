import { TimeDashboardWrapper } from "./TimeDashboard.styles";
import { StatisticsCard } from "../statistics-card/StatisticsCard";
import data from "../../../public/data.json";

export const TimeDashboard = () => {
  const statistics = data;
  return (
    <TimeDashboardWrapper>
      {statistics.map((element) => (
        <StatisticsCard key={element.title} element={element} />
      ))}
    </TimeDashboardWrapper>
  );
};
