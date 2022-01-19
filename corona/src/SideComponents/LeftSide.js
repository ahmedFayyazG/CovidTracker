import React, { Component } from "react";
import styled from "styled-components";
const LeftSide = () => {
  return (
    <div>
      <LeftShowCase>
        <TotalConfirmed>
          <h6 style={{ fontFamily: "revert", margin: "20px" }}>
            {" "}
            Total Confirmed
          </h6>
          <h1
            style={{
              color: "red",
              fontFamily: "sans-serif",
              fontWeight: "bolder",
            }}
          >
            2132012
          </h1>
        </TotalConfirmed>
        <ConfirmedCasesByCountry>
          <h9>Confirmed Cases by Countries/Region/Soverieghty</h9>
        </ConfirmedCasesByCountry>
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
  border: 0.1px solid #435055;

  margin-left: 10px;
`;

const ConfirmedCasesByCountry = styled.div`
  height: 35rem;
  width: 220px;
  color: white;
  background: #2b2b2b;
  margin-bottom: 10px;
  border: 0.1px solid #435055;

  margin-left: 10px;
`;
