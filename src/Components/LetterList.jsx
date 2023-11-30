import React, { useContext } from "react";
import styled from "styled-components";
import LetterCard from "./LetterCard";
import { useSelector } from "react-redux";

function LetterList() {
  // const { activeMember } = useContext(MemberContext);
  // const { letters } = useContext(LetterContext);
  const activeMember = useSelector((state) => state.member);
  const letters = useSelector((state) => state.letters);
  const filteredLetters = letters.filter(
    (letter) => letter.writedTo === activeMember
  );
  return (
    <ListWrapper>
      {filteredLetters.length === 0 ? (
        <p>Please leave your first letter.</p>
      ) : (
        filteredLetters.map((letter) => (
          <LetterCard key={letter.id} letter={letter} />
        ))
      )}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  font-family: "Exo 2", sans-serif;
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  padding: 12px;
  & p {
    text-align: center;
  }
`;

export default LetterList;
