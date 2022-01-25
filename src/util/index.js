/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

export const getDistance = (point, p) => {
  return Math.sqrt(
    Math.pow(point.location.x - p.location.x, 2) +
      Math.pow(point.location.y - p.location.y, 2)
  );
};
export const getClosest = (arr, point) => {
  try {
    return arr
      ?.filter((e) => e.size === point.size && e.available === true)
      ?.reduce((a, b) =>
        getDistance(point, a) < getDistance(point, b) ? a : b
      );
  } catch (error) {
    console.log(error, "darwin");
    return error;
  }
};
export const switchNamer = (size) => {
  switch (size) {
    case 1:
      return "Small";
    case 2:
      return "MEDIUM";
    case 3:
      return "LARGE";
    default:
      return "LARGE";
  }
};

export const useTimer = () => {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => setSeconds(seconds + 1), 1000);
  });
  return seconds;
};

export const getTimeStamp = () => Date.now();

export const checkVehicleSize = (size) => {
  switch (size) {
    case 1:
      return 20;
    case 2:
      return 60;
    case 3:
      return 100;
    default:
      return 100;
  }
};
