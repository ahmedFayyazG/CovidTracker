import React, { Component, Suspense } from "react";
import styled from "styled-components";
import LeftSide from "../SideComponents/LeftSide";
import RightSide from "../SideComponents/RightSide";
import { GeoMap } from "../WorldMap/Map";
import { fetchData } from "./CoronaApi";

const resource = fetchData();
const CovidHome = () => {
  return (
    <>
      <NavBar />
      <FlexBox>
        <LeftSide />
        <Suspense fallback={<h2>Loading...</h2>}>
          <GeoMap />
        </Suspense>
        <RightSide />
      </FlexBox>
    </>
  );
};

export default CovidHome;

const PakCovDetails = () => {
  const corona = resource.pakData.read();
  console.log(corona);
  return (
    <div className="card card-body my-3">
      <div className="large text-primary">
        {corona.map((c, i) => {
          return (
            <h2 key={i}>
              {c.provinceStateName} : {c.peoplePositiveCasesCt}
            </h2>
          );
        })}
      </div>
    </div>
  );
};

const BackGroundColor = styled.div`
  background: #33313b;
`;

const FlexBox = styled.div`
  display: flex;
  direction: row;
  justify-content: space-between;
`;

const NavBar = styled.div`
  height: 1.8em;
  width: 100%;
  color: white;
  border: 0.1px solid #435055;
  background: gray;
  position: absoulte;
  margin-bottom: 10px;
`;
