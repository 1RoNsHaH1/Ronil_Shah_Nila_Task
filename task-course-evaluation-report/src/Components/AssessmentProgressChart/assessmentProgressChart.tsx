import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface AssessmentProgressChartProps {
  assessmentProgress: {
    assignment: { pending: number; completed: number };
    quiz: { pending: number; completed: number };
    presentation: { pending: number; completed: number };
    lab: { pending: number; completed: number };
    viva: { pending: number; completed: number };
  };
}

const AssessmentProgressChart = ({
  assessmentProgress,
}: AssessmentProgressChartProps) => {
  const data = [
    {
      name: "Assignment",
      completed: assessmentProgress.assignment.completed,
      pending: assessmentProgress.assignment.pending,
    },
    {
      name: "Quiz",
      completed: assessmentProgress.quiz.completed,
      pending: assessmentProgress.quiz.pending,
    },
    {
      name: "Presentation",
      completed: assessmentProgress.presentation.completed,
      pending: assessmentProgress.presentation.pending,
    },
    {
      name: "Lab",
      completed: assessmentProgress.lab.completed,
      pending: assessmentProgress.lab.pending,
    },
    {
      name: "Viva",
      completed: assessmentProgress.viva.completed,
      pending: assessmentProgress.viva.pending,
    },
  ];

  const percentageFormatter = (value: number) => `${value}%`;

  return (
    <div>
      <p>
        <strong>Assessment Progress</strong>
      </p>
      <ResponsiveContainer width={500} height={250}>
        <BarChart
          width={500}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Legend align="center" />
          <Bar
            dataKey="completed"
            fill="#198754"
            background={{ fill: '#eee' }}
            activeBar={<Rectangle fill="#198754" stroke="blue" />}
          />
          <Bar
            dataKey="pending"
            fill="#ff7300"
            background={{ fill: '#eee' }}
            activeBar={<Rectangle fill="#ff7300" stroke="purple" />}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <YAxis tickFormatter={percentageFormatter}/>
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AssessmentProgressChart;
