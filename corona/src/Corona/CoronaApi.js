import axios from "axios";

// const URL =
//   "https://localcoviddata.com/covid19/v1/cases/jhu?daysInPast=4&country=PAK";
import React, { Component } from "react";

export const fetchData = () => {
  const pakCoronaData = fetchPakistan();
  console.log(pakCoronaData);
  return {
    pakData: wrapPromise(pakCoronaData),
  };
};

const wrapPromise = (promise) => {
  //Let intial State
  let status = "pending";
  let result;

  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

const fetchPakistan = () => {
  console.log("Fetching User...");
  return axios
    .get(
      "https://localcoviddata.com/covid19/v1/cases/jhu?daysInPast=1&country=PAK",
      {
        headers: {},
      }
    )
    .then((res) => {
      return res.data.historicData.historicData;
    })
    .catch((err) => console.log(err));
};
