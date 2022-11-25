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
  width: 80vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  margin-top: 2rem;

  & > div {
    width: 15rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0.8rem;

    color: var(--black);
    background-color: var(--silver);

    cursor: pointer;

    transition: 0.8s;

    :hover {
      background-color: var(--gray);

      transition: 0.8s;
    }

    & > span {
      font-weight: bold;
    }
  }
`;
