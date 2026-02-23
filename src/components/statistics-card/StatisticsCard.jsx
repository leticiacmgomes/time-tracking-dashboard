import { useModeStore } from "../../store/modeStore";
import {
  StatisticsCardWrapper,
  BackgroundIcon,
  StatisticsWrapper,
  Ellipsis,
  Title,
  Current,
  Previous,
} from "./StatisticsCard.styles";
import iconEllipsis from "/images/icon-ellipsis.svg";

export const StatisticsCard = ({ element }) => {
  const { title, image, bgColor, timeframes } = element;
  const currentMode = useModeStore((state) => state.currentMode);
  const { current, previous } = timeframes[currentMode];
  return (
    <StatisticsCardWrapper>
      <BackgroundIcon $image={image} $bgColor={bgColor} />
      <StatisticsWrapper>
        <Ellipsis src={iconEllipsis} alt="Ellipsis" />
        <Title>{title}</Title>
        <Current>{current}hrs</Current>
        <Previous>
          last{" "}
          {currentMode === "daily" ? "day" : currentMode === "monthly" ? "month" : "week"} -{" "}
          {previous}hrs
        </Previous>
      </StatisticsWrapper>
    </StatisticsCardWrapper>
  );
};
