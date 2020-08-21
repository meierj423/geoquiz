import React, { useEffect } from "react";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import ResultsHeader from "./ResultsHeader";
import ResultCard from "./ResultCard";



const countries = ["Argentina", "Peru", "Brazil", "Colombia", "Venezuela"];

function Results() {
  useEffect(() => {
    const results = [{

      "Africa": "55"
    },
    {
      "North America": "90"

    }]
    API.saveResult("5f3af31f92421bade1ab4cf7", results)
  })
  return (
    <div className="container mt-4 p-4">
      <div className="row">
        <div className="col-sm-12">
          <ResultsHeader continent="South America" />
        </div>
      </div>
      <div className="row text-center">
        {countries.map((country) => {
          return <ResultCard key={Math.random()} country={country} />;
        })}
      </div>
      <div className="row">
        <Button style={{ margin: "0 auto", marginTop: "3rem" }} variant="primary" href="/profile">
          New Quiz
        </Button>
      </div>
    </div>
  );
}

export default Results;
