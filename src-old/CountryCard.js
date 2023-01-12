import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Grid = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 50px 50px;
  padding: 20px 20px 20px 20px;
`;

const GridItem = styled.section`
  border: 1px solid black;
  padding: 20px;
`;

const Flag = styled.img`
  width: 200px;
  border: 1px solid black;
`;

function CountryCard(props) {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <Grid>
        {props.data !== 0
          ? props.data.Countries.map((country) => {
              return country.Country.toLowerCase().includes(
                input.toLowerCase()
              ) ? (
                <GridItem key={country.Country}>
                  <h3>
                    {country.Country}{" "}
                    {country.CountryCode.replace(/./g, (char) =>
                      String.fromCodePoint(char.charCodeAt(0) + 127397)
                    )}
                  </h3>
                  <Flag
                    src={`https://flagpedia.net/data/flags/w580/${country.CountryCode.toLowerCase()}.webp`}
                  ></Flag>
                  <p>
                    Total Cases: {country.TotalConfirmed.toLocaleString()} |
                    Total Deaths: {country.TotalDeaths.toLocaleString()} |
                    Ratio:{" "}
                    {Math.round(country.TotalConfirmed / country.TotalDeaths)}
                  </p>
                </GridItem>
              ) : (
                ""
              );
            })
          : "Loading..."}
      </Grid>
    </>
  );
}

export default CountryCard;
