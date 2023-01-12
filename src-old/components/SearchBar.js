import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px 40px;
`;

const Input = styled.input`
  font-size: 1.5rem;
`;

function SearchBar({ handleInput, input }) {
  return (
    <Container>
      <Input
        type="text"
        value={input}
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Search..."
      ></Input>
    </Container>
  );
}

export default SearchBar;
