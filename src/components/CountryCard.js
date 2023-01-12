import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background-color: #0d1b2a;
  color: #e0e1dd;
  height: 200px;
  border-radius: 0px 0px 10px 10px;
  width: 352px;
`;

const Title = styled.section`
  font-size: 2rem;
  padding: 10px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

const Info = styled.section`
  font-size: 1.2rem;
  padding: 10px;
  padding-bottom: 0px;
`;

const Image = styled.img`
  border-radius: 10px 10px 0px 0px;
  border: 1px solid #0d1b2a;
  object-fit: cover;
  width: 100%;
  height: 200px;
`;

const InfoWrapper = styled.section`
  flex-direction: column;
  display: flex;
  justify-content: start;
  height: 100px;
`;

function CountryCard(props) {
  const country = props.country;
  return (
    <Wrapper>
      <Image
        src={`https://flagpedia.net/data/flags/w580/${props.country.CountryCode.toLowerCase()}.webp`}
      ></Image>
      <Container>
        <Title>{country.Country}</Title>
        <InfoWrapper>
          <Info>Total Cases: {country.TotalConfirmed.toLocaleString()}</Info>
          <Info>Total Deaths: {country.TotalDeaths.toLocaleString()}</Info>
        </InfoWrapper>
      </Container>
    </Wrapper>
  );
}

export default CountryCard;
