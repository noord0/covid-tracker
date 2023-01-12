import React from "react";
import styled from "styled-components";
import Flag from "./Flag";

const GridItem = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border-radius: 10px;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const Info = styled.section`
  padding: 10px;
  padding-bottom: 20px;
  justify-self: end;
  align-self: end;
`;

const Inner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 400px;
  border-radius: 0px 0px 10px 10px;
`;

function CountryCard(props) {
  return (
    <>
      <GridItem key={props.country.Country}>
        <Flag
          image={`https://flagpedia.net/data/flags/w580/${props.country.CountryCode.toLowerCase()}.webp`}
        ></Flag>
        <Inner>
          <h3>
            {props.country.Country}{" "}
            {/* {props.country.CountryCode.replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )} */}
          </h3>
          <Container>
            <Info>
              Total Cases: {props.country.TotalConfirmed.toLocaleString()}
            </Info>
            <Info>
              Total Deaths: {props.country.TotalDeaths.toLocaleString()}
            </Info>
          </Container>
        </Inner>
      </GridItem>
    </>
  );
}

export default CountryCard;
