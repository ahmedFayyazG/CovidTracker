import React, { Component } from "react";
import styled from "styled-components";
const LeftSide = () => {
  return (
    <div>
      <LeftShowCase>
        <TotalConfirmed></TotalConfirmed>
        <ConfirmedCasesByCountry></ConfirmedCasesByCountry>
      </LeftShowCase>
    </div>
  );
};

export default LeftSide;

const LeftShowCase = styled.div`
  height: 50em;
  width: 15em;
  background: 414141;
  color: white;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
`;

const TotalConfirmed = styled.div`
  height: 130px;
  width: 220px;
  color: white;
  background: #2b2b2b;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
`;

const ConfirmedCasesByCountry = styled.div`
  height: 35rem;
  width: 220px;
  color: white;
  background: #2b2b2b;
  margin-bottom: 10px;
  margin-left: 10px;
`;
