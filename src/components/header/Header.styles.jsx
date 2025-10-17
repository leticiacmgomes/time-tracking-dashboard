import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: hsl(235, 46%, 20%);
  width: 100%;
  max-width: 350px;
  height: fit-content;
  border-radius: 1.5rem;

  @media (min-width: 765px) {
    max-width: 100%;
  }

  @media (min-width: 1200px) {
    max-width: 350px;
  }
`;

export const ProfileWrapper = styled.div`
  padding: 2rem 1rem;
  border-radius: 1rem;
  background-color: hsl(246, 80%, 60%);
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 2.5rem 10rem 2.5rem;
  }
`;

export const ProfilePicture = styled.img`
  width: 5rem;
  max-width: max-content;
  border: solid 5px white;
  border-radius: 50%;

  @media (min-width: 1200px) {
    width: 8rem;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & span {
    color: hsl(236, 100%, 87%);
  }

  & strong {
    color: white;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 300;

    @media (min-width: 1200px) {
      font-size: 3.5rem;
    }
  }
`;

export const StatisticsModeControlWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 2rem;

  @media (min-width: 1200px) {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }
`;

export const StatisticsModeControl = styled.button`
  cursor: pointer;
  color: ${({ $isSelected }) => ($isSelected ? "white" : "hsl(235, 45%, 61%)")};
  background: transparent;
  border: none;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 500;
`;
