import React from "react";
import styled from "styled-components";
import Header from "Components/Header";
import AddForm from "Components/AddForm";
import LetterList from "Components/LetterList";

function Home() {
  return (
    <Container>
      <Header />
      <AddForm />
      <LetterList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
