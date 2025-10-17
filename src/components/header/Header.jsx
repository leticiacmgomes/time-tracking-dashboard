import {
  HeaderWrapper,
  ProfileWrapper,
  ProfilePicture,
  Name,
  StatisticsModeControlWrapper,
  StatisticsModeControl,
} from "./Header.styles";
import imageJeremy from "../../assets/images/image-jeremy.png";
import { useModeStore } from "../../store/modeStore";

export const Header = () => {
  const statisticsMode = ["daily", "weekly", "monthly"];
  const currentMode = useModeStore(state => state.currentMode)
  const setMode = useModeStore((state) => state.setMode);
  const handleClick = (mode) => {
    setMode(mode);
  };

  return (
    <HeaderWrapper>
      <ProfileWrapper>
        <ProfilePicture
          src={imageJeremy}
          alt="Foto de um homem negro de sorrindo"
        />
        <Name>
          <span>Report for</span>
          <strong>jeremy robson</strong>
        </Name>
      </ProfileWrapper>
      <StatisticsModeControlWrapper>
        {statisticsMode.map((mode) => (
          <StatisticsModeControl key={mode} onClick={() => handleClick(mode)} $isSelected={mode == currentMode}>
            {mode}
          </StatisticsModeControl>
        ))}
      </StatisticsModeControlWrapper>
    </HeaderWrapper>
  );
};
