import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
`;

function Flag(props) {
  return <Image src={props.image}></Image>;
}

export default Flag;
