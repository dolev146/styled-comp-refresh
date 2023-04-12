import { Component } from "react";
import { Container } from "./components/styles/Container.styled";
import { Header } from "./components/Header";
import { StypledHeader } from "./components/styles/Header.styled";
function App() {
  return (
    <>
      <StypledHeader>
        <Header />
      </StypledHeader>
      <Container>
        <h1> Hello wolrd </h1>
      </Container>
    </>
  );
}

export default App;
