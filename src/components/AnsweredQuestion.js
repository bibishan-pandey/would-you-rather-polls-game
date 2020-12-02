import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function AnsweredQuestion({ optionOne, optionTwo, answered }) {
  const votesOne = optionOne.votes.length;
  const votesTwo = optionTwo.votes.length;
  const votesTotal = votesOne + votesTwo;
  const percentOne = Math.round((votesOne / votesTotal) * 10000) / 100;
  const percentTwo = Math.round((votesTwo / votesTotal) * 10000) / 100;

  return (
    <div>
      <h1>Answered Question</h1>
      <ProgressBar>
        <ProgressBar animated variant="success" now={percentOne} key={1} />
        <ProgressBar animated variant="danger" now={percentTwo} key={2} />
      </ProgressBar>
      <div>
        <p className={"mt-4"}>
          <span className={"text-success"}>Option One: </span> {optionOne.text}{" "}
          <strong>
            {votesOne} of {votesTotal}, {percentOne}%
          </strong>
        </p>
        <p className={"mt-4"}>
          <span className={"text-danger"}>Option Two: </span> {optionTwo.text}{" "}
          <strong>
            {votesTwo} of {votesTotal}, {percentTwo}%
          </strong>
        </p>
        <h2>
          You voted for:{" "}
          {answered === "optionOne"
            ? `"${optionOne.text}"`
            : `"${optionTwo.text}"`}
        </h2>
      </div>
    </div>
  );
}
