import React from "react";
import moment from "moment";

export default function Moment() {
  const today = moment().format("dddd");

  return <div>{today}</div>;
}
