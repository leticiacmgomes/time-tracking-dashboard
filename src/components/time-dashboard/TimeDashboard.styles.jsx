import { styled } from "styled-components";

export const TimeDashboardWrapper = styled.ul`
  display: grid;
  height: fit-content;
  justify-items: center;
  gap: 2rem;

  @media (min-width: 765px) {
    grid-template: repeat(2, auto) / repeat(3, auto);
    grid-auto-flow: row;
  }
`;
