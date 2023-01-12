import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const Input = styled.input`
  border: 0px;
  padding: 10px;
  border-radius: 10px;
  background: transparent;
  font-size: 1.2rem;
  outline: none;
`;

const Container = styled.section`
  background-color: #ffffff;
  color: #1b263b;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
  border-radius: 10px;
`;

const StyledSearchIcon = styled(MdSearch)`
  padding-left: 5px;
  width: 25px;
  height: 25px;
  flex-shrink: 0;
`;

function SearchBar(props) {
  return (
    <Container>
      <StyledSearchIcon></StyledSearchIcon>
      <Input
        value={props.input}
        onChange={(e) => props.handleInput(e.target.value)}
        placeholder="Search..."
      ></Input>
    </Container>
  );
}

export default SearchBar;
