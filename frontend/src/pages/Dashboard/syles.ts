import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem;

  & > h1 {
    color: var(--white);
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;

    & > p {
      font-size: 10pt;
    }
  }

  & > span {
    & > a {
      color: var(--light-pink);

      text-decoration: none;

      transition: 0.8s;

      :hover {
        color: var(--pink);
      }
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
