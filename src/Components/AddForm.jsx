import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import Button from "./common/Button";
import { useDispatch } from "react-redux";
import { addLetter } from "redux/modules/letterSlice";

function AddForm() {
  // const { setLetters } = useContext(LetterContext);
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [comment, setComment] = useState("");
  const [member, setMember] = useState("Irene");

  const onAddLetter = (event) => {
    event.preventDefault();
    if (!nickname || !comment) return alert("Put your nickname and comment");

    const newLetter = {
      createdAt: new Date().toString(),
      nickname: nickname,
      avatar: null,
      content: comment,
      writedTo: member,
      id: uuid(),
    };

    // setLetters((prev) => [newLetter, ...prev]);
    dispatch(addLetter(newLetter));
    setNickname("");
    setComment("");
  };

  return (
    <Form onSubmit={onAddLetter}>
      <SelectWrapper>
        <label>Nickname</label>
        <input
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
          placeholder="Up to 20 characters"
          maxLength={20}
        />
      </SelectWrapper>
      <SelectWrapper>
        <label>Comment</label>
        <textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Up to 100 characters"
          maxLength={100}
        />
      </SelectWrapper>
      <SelectWrapper>
        <label>Artist</label>
        <select onChange={(event) => setMember(event.target.value)}>
          <option>Irene</option>
          <option>Seulgi</option>
          <option>Wendy</option>
          <option>Joy</option>
          <option>Yeri</option>
        </select>{" "}
        <Button text="Submit" color="black" />
      </SelectWrapper>
    </Form>
  );
}

const Form = styled.form`
  border: 1px solid white;

  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  width: 500px;
  border-radius: 12px;
  margin: 20px 0;
  font-family: "Exo 2", sans-serif;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & input,
  textarea {
    width: 80%;
    padding: 12px;
    border: 1px solid white;
    background-color: black;
    &:hover {
      border: 1px solid #fdb69f;
      transition: 0.2s ease-in-out;
    }
  }
  & textarea {
    resize: none;
    height: 80px;
  }
`;
const SelectWrapper = styled(InputWrapper)`
  justify-content: flex-start;
  & label {
    width: 95px;
  }
  & select {
    border: 1px solid white;
    padding: 5px;
    background-color: black;
    margin-right: 220px;
    &:hover {
      cursor: pointer;
      border: 1px solid #fdb69f;
      transition: 0.2s ease-in-out;
    }
  }
`;

export default AddForm;
