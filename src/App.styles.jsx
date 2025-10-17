import { styled } from "styled-components";

export const AppWrapper = styled.div`
  font-family: "Rubik", sans-serif;
  width: 100vw;
  min-height: 100vh;
  padding: 5rem 2rem;
  background-color: hsl(226, 43%, 10%);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;
