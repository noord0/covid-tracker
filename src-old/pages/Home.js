import React, { useState } from "react";
import { CountryCard, SearchBar } from "../components";
import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 80px;
  padding: 40px;
  padding-top: 10px;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const Title = styled.section`
  font-size: 2rem;
  padding-top: 40px;
`;

function Home(props) {
  const [input, setInput] = useState("");

  const handleInput = (input) => {
    setInput(input);
  };
  return (
    <div>
      <Container>
        <Title>Covid-19 Tracker</Title>
      </Container>
      <SearchBar handleInput={handleInput} input={input}></SearchBar>
      <Container>
        <Grid>
          {props.data !== 0
            ? props.data.Countries.map((country) => {
                return country.Country.toLowerCase().includes(
                  input.toLowerCase()
                ) ? (
                  <CountryCard country={country}></CountryCard>
                ) : (
                  ""
                );
              })
            : "Loading..."}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
