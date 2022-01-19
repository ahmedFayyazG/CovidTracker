import React, { Component } from "react";
import styled from "styled-components";
const RightSide = () => {
  return (
    <div>
      <LeftShowCase>
        <FlexDaba>
          <PakistaniCases></PakistaniCases>
          <TotalDeaths></TotalDeaths>
        </FlexDaba>

        <Graphs />
      </LeftShowCase>
    </div>
  );
};

export default RightSide;

const LeftShowCase = styled.div`
  height: 50em;
  width: 27em;
  float: right;
  background: 414141;
  color: white;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
`;

const TotalDeaths = styled.div`
  height: 400px;
  width: 190px;
  color: white;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 2px solid white;
  background: #2b2b2b;
`;

const PakistaniCases = styled.div`
  height: 400px;
  width: 190px;
  margin: 10px;
  color: white;
  border: 2px solid white;
  background: #2b2b2b;
`;

const FlexDaba = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexBigBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Graphs = styled.div`
  height: 40rem;
  width: 24rem;
  border: 2px solid white;
  margin: 10px;
`;
