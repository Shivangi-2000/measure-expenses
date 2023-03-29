import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
export default function Chart(props) {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValue);
  props.dataPoints.map((dataPoint) =>
    console.log(`dataPoint.lable`, dataPoint.lable)
  );

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.lable}
        />
      ))}
    </div>
  );
}
