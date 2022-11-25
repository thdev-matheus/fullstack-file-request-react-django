import styled from "styled-components";
import { IKindBox } from "./types";

export const Container = styled.div`
  width: 25rem;
  min-height: 6rem;

  display: flex;
  justify-content: flex-start;

  border-radius: 0.8rem;

  overflow: hidden;

  background-color: var(--white);
`;

export const KindBox = styled.div<IKindBox>`
  width: 0.7rem;
  height: 100%;

  background-color: ${(props) =>
    props.kind === "Entrada"
      ? "var(--toastify-color-success)"
      : "var(--toastify-color-error)"};
`;

export const MainInfoBox = styled.div`
  width: 16rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0.5rem 1rem;

  & > h3 {
    font-size: 10pt;

    color: var(--black);
  }

  & > span {
    font-size: 8pt;
    color: var(--black);
  }
`;

export const AditionalInfoBox = styled.div<IKindBox>`
  width: 9rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  padding: 0.5rem;

  & > span {
    font-size: 8pt;

    color: ${(props) =>
      props.kind === "Entrada"
        ? "var(--toastify-color-success)"
        : "var(--toastify-color-error)"};
  }

  span + span {
    color: var(--black);
  }
`;
