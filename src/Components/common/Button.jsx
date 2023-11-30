import React from "react";
import styled from "styled-components";

function Button({ text, color, onClick = () => {} }) {
  return (
    <ButtonWrapper color={color}>
      <button onClick={onClick}>{text}</button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & button {
    border: 1px solid white;
    font-family: "Exo 2", sans-serif;
    padding: 12px 20px;
    background-color: ${(props) => props.color};
    &:hover {
      cursor: pointer;
      border: 1px solid #fdb69f;
      transition: 0.2s ease-in-out;
    }
  }
`;

export default Button;
