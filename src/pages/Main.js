import React, { useState, useEffect } from "react";
import { CountryCard, Header } from "../components";
import styled from "styled-components";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 80px;
  padding: 0 100px;
  width: 80%;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DropdownWrapper = styled.div`
  width: 10rem;
  padding: 50px 100px;
`;

function Main() {
  const [data, setData] = useState(require("../data.json"));
  const [sortedData, setSortedData] = useState(0);
  const [input, setInput] = useState("");
  const [sortMethod, setSortMethod] = useState("Alphabetical");

  // async function getCovidInfo() {
  //   let fetchedData = await fetch("https://api.covid19api.com/summary");
  //   const jsonData = await fetchedData.json();
  //   if (jsonData.Message === "Caching in progress") return 0;
  //   return jsonData;
  // }

  useEffect(() => {
    // getCovidInfo().then((value) => {
    //   setTest(value);
    // });
    if (data !== 0) {
      const tempData = Array.from(data.Countries);
      if (
        sortMethod.label === "Alphabetical" ||
        sortMethod === "Alphabetical"
      ) {
        setSortedData(
          tempData.sort((a, b) => {
            return b.Country - a.Country;
          })
        );
      }
      if (sortMethod.label === "Cases" || sortMethod === "Cases") {
        setSortedData(
          tempData.sort((a, b) => {
            return b.TotalConfirmed - a.TotalConfirmed;
          })
        );
      }
      if (sortMethod.label === "Deaths" || sortMethod === "Deaths") {
        setSortedData(
          tempData.sort((a, b) => {
            return b.TotalDeaths - a.TotalDeaths;
          })
        );
      }
    }
  }, [data, sortMethod]);

  const handleInput = (input) => {
    setInput(input);
  };

  const options = ["Alphabetical", "Cases", "Deaths"];

  return (
    <Wrapper props={sortedData}>
      <Header handleInput={handleInput} input={input}></Header>
      <DropdownWrapper>
        Sort By
        <Dropdown
          options={options}
          onChange={setSortMethod}
          value={sortMethod}
          placeholder="Sort By"
        />
      </DropdownWrapper>
      <Grid props={sortedData}>
        {sortedData !== 0
          ? sortedData.map((country) => {
              return country.Country.toLowerCase().includes(
                input.toLowerCase()
              ) ? (
                <CountryCard
                  country={country}
                  key={country.Country}
                ></CountryCard>
              ) : (
                ""
              );
            })
          : "Loading..."}
      </Grid>
    </Wrapper>
  );
}

export default Main;
