import React from "react";

export const Date = ({ dateString }) => {
  const date = new window.Date(dateString).toLocaleDateString("en-En", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return <time dateTime={dateString}>{date}</time>;
};
