import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > span {
    margin-left: 0.3rem;
    font-size: 9pt;
  }

  & > input {
    width: 10rem;
    height: 2.5rem;

    position: absolute;

    color: black;

    cursor: pointer;

    opacity: 0;

    ::after {
      display: none;
    }

    ::-webkit-file-upload-button {
      display: none;
    }
  }
`;

export const InputFake = styled.div`
  width: 10rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0.5rem;

  border-radius: 0.8rem;
  background-color: var(--white);
  color: var(--black);
`;
