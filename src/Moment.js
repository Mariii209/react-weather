import React from "react";
import moment from "moment";

export default function Moment() {
  const today = moment().format("dddd");

  return <p className="CurrentDay">{today}</p>;
}
