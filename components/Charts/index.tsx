'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js/auto";
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Props = {
    chartData: ChartData | any;

}

export function Chart({ chartData }: Props) {
  return (
    <>
      <Bar
      className="capitalize"
        data={chartData}
        options={{
          plugins: {
            title: {
                display: true,
                text: "Categories",
                font: {size: 20},
              },
              legend: {
                display: false
              },
          },
        }}
      />
    </>
  )
}