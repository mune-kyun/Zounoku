import React from "react";

export default function dateConverter(date) {
  const dateString = new Date(date).toString().split(" ").slice(1, 4);
  return dateString.join(" ");
}
