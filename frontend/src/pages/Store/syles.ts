import styled from "styled-components";
import { IBalance } from "./types";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

export const StoreInfoBox = styled.aside<IBalance>`
  width: 50%;

  display: flex;
  gap: 2rem;

  padding: 2rem 3rem;

  & > svg {
    cursor: pointer;

    transition: 0.8s;

    :hover {
      color: var(--toastify-color-success);
      transition: 0.8s;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > h1 {
      font-size: 40pt;
    }

    & > span {
      font-size: 14pt;
    }

    & > p {
      margin-top: 4rem;

      font-size: 18pt;
      font-weight: bold;

      & > span {
        color: ${(props) =>
          props.balance === "p"
            ? "var(--toastify-color-success)"
            : props.balance === "n"
            ? "var(--toastify-color-error)"
            : "var(--silver)"};
      }
    }
  }
`;

export const TransactionsContainer = styled.aside`
  width: 50%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 2rem;

  & > h2 {
    font-size: 20pt;

    margin: 0 0 1rem 1rem;
  }
`;

export const TransactionsBox = styled.div`
  height: 85vh;
  width: 27rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-bottom: 1rem;

  overflow: hidden auto;

  ::-webkit-scrollbar {
    width: 0.8rem;

    border-radius: 0.8rem;

    background-color: var(--silver);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 0.8rem;
    background-color: var(--toastify-color-dark);
  }
`;
