import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const Title = styled.section`
  font-size: 2rem;
  padding-bottom: 20px;
`;
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;
const Container = styled.section`
  background-color: #0d1b2a;
  color: #e0e1dd;
  border-radius: 0px 0px 20px 20px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150px;
`;

function Header(props) {
  return (
    <Wrapper>
      <Container>
        <Title>COVID19 Tracker</Title>
        <SearchBar
          handleInput={props.handleInput}
          input={props.input}
        ></SearchBar>
      </Container>
    </Wrapper>
  );
}

export default Header;
