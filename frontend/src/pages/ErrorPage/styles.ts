import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  padding-top: 2rem;

  overflow: hidden auto;

  & > img {
    width: 20vw;
  }

  & > h2 {
    width: 80vw;
    font-size: 20pt;

    text-align: center;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;

    & > span {
      width: 85vw;
      font-size: 12pt;

      text-align: center;

      & > a {
        text-decoration: none;

        color: var(--light-pink);

        cursor: pointer;

        :hover {
          transition: 0.6s;

          color: var(--pink);
        }
      }
    }

    & > p {
      width: 85vw;
      font-size: 18pt;

      text-align: center;

      color: var(--light-pink);

      cursor: pointer;

      :hover {
        transition: 0.6s;

        color: var(--pink);
      }
    }
  }
`;
