import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import "./attendanceChart.css"

interface AttendanceChartProps {
  attendance: {
    [key: string]: {
      [key: string]: { date: string; percentage: string };
    };
  };
}

const AttendanceChart = ({ attendance }: AttendanceChartProps) => {
  const attendanceData: any[] | undefined = [];

  Object.keys(attendance).forEach(month => {
    Object.keys(attendance[month]).forEach(week => {
      const { date, percentage } = attendance[month][week];
      attendanceData.push({
        date: new Date(date).toLocaleDateString('en-GB'), // Format as DD/MM
        percentage: parseFloat(percentage)
      });
    });
  });

  const percentageFormatter = (value: number) => `${value}%`;

  return (
    <div>
      <p><strong>Attendance Over Time</strong></p>
      
      <LineChart width={500} height={250} data={attendanceData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
            dataKey="date"
            label={{
                value: `weeks`,
                style: { textAnchor: 'middle' },
                angle: 0,
                position: 'bottom',
                offset: 0,
                height:"50"
            }}
        />
        <YAxis
            tickFormatter={percentageFormatter}
            label={{
                value: `Attendance`,
                style: { textAnchor: 'middle' },
                angle: -90,
                position: 'left',
                offset: 0,
              }}
        />
        <Tooltip />
        <Line type="monotone" dataKey="percentage" stroke="#8884d8" />
      </LineChart>
      
    </div>
  );
};

export default AttendanceChart;
