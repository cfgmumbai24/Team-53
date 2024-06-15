import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

export default function PieChart({ data }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext('2d')
    chartInstance.current = new Chart(ctx, {
      type: 'pie', // Change type to pie
      data: {
        labels: ['A', 'B', 'C', 'D'], // Labels for different types
        datasets: [
          {
            label: 'Number of Students',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)', // Red for A
              'rgba(54, 162, 235, 0.2)', // Blue for B
              'rgba(255, 206, 86, 0.2)', // Yellow for C
              'rgba(75, 192, 192, 0.2)', // Green for D
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [data])

  return <canvas ref={chartRef} />
}
