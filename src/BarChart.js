import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import DataFetch from "./DataFetch";


function BarChart(props) {

let resArr = DataFetch()
let xValues = []
let yValues = []
 
/*  for loop to calculate word and count */
for(let i=0; i < resArr.length; i++){
  xValues.push(resArr[i][0]);
  yValues.push(resArr[i][1]);
}

const labels = xValues;
const data = {
    labels: labels,
    datasets: [
      {
        label: "Top 20 words with highest occurence.",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: yValues,
      },
    ],
};


const { open } = props;

  return (
    <> 
      {open && (
        <div >
          <Bar data={data} />
        </div>
      )}
    </>
  )
}

export default BarChart