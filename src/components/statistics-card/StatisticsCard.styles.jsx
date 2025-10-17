import { styled } from "styled-components";

export const StatisticsCardWrapper = styled.li`
  width: 100%;
  height: fit-content;
  padding-top: 4rem;
  max-width: 350px;
  position: relative;
`;

export const BackgroundIcon = styled.div`
  background-color: ${({ $bgColor }) => $bgColor};
  height: 4rem;
  width: 100%;
  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-position: right 2rem center;
  border-radius: 0.8rem 0.8rem 0 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
`;

export const StatisticsWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  background-color: hsl(235, 46%, 20%);
  position: relative;
  transform: translateY(-0.8rem);
  z-index: 1;
  display: grid;
  gap: 0.8rem;
  align-items: center;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  grid-template-areas:
    "title ellipsis"
    "current previous";
  cursor: pointer;

  @media (min-width: 768px) {
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
    grid-template-areas:
      "title ellipsis"
      "current ."
      "previous .";
  }
`;

export const Ellipsis = styled.img`
  grid-area: ellipsis;
  justify-self: end;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: white;
  grid-area: title;
`;

export const Current = styled.strong`
  grid-area: current;
  font-weight: 300;
  color: white;
  font-size: 25px;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Previous = styled.strong`
  grid-area: previous;
  justify-self: end;
  text-transform: capitalize;
  color: hsl(236, 100%, 87%);
  font-size: 15px;
  white-space: nowrap;

  @media (min-width: 768px) {
    justify-self: start;
  }
`;
