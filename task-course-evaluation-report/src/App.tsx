import React from "react";
import CourseInfo from "./Components/CourseInfo/courseInfo";
import AssessmentProgressChart from "./Components/AssessmentProgressChart/assessmentProgressChart";
import AttendanceChart from "./Components/AttendanceChart/attendanceChart";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const courseData = {
  courseCode: "BA3102",
  courseName: "Quantitative Techniques",
  courseType: "Program Elective",
  coursePeriod: "Semester-I",
  credits: {
    Lecture: 3,
    Tutorial: 0,
    Practical: 1,
    Project: 0,
  },
  courseOutcomes: ["CO2", "CO4", "CO5", "CO7", "CO13", "CO14"],
  mappedToThisCourse: ["PO7", "PO8", "PO10", "PO12"],
  courseAverageMarks: "85%",
  assessmentProgress: {
    assignment: { pending: 10, completed: 90 },
    quiz: { pending: 5, completed: 95 },
    presentation: { pending: 20, completed: 80 },
    lab: { pending: 15, completed: 85 },
    viva: { pending: 12, completed: 88 },
  },
  studentsAttendance: {
    attendance: {
      July: {
        week_1: { date: "2024-07-07", percentage: "85%" },
        week_2: { date: "2024-07-14", percentage: "90%" },
        week_3: { date: "2024-07-21", percentage: "75%" },
        week_4: { date: "2024-07-28", percentage: "95%" },
      },
      August: {
        week_1: { date: "2024-08-04", percentage: "80%" },
        week_2: { date: "2024-08-11", percentage: "88%" },
        week_3: { date: "2024-08-18", percentage: "92%" },
        week_4: { date: "2024-08-25", percentage: "87%" },
      },
      September: {
        week_1: { date: "2024-09-01", percentage: "91%" },
        week_2: { date: "2024-09-08", percentage: "89%" },
        week_3: { date: "2024-09-15", percentage: "84%" },
        week_4: { date: "2024-09-22", percentage: "93%" },
        week_5: { date: "2024-09-29", percentage: "90%" },
      },
    },
  },
};

const App = () => {
  return (
    <div className="contained">
      <h1 className="text-center">Course Evaluation Report</h1>
      <div className="components">
        <CourseInfo course={courseData} />
        <div className="charts">
          <AssessmentProgressChart
            assessmentProgress={courseData.assessmentProgress}
          />
          <AttendanceChart
            attendance={courseData.studentsAttendance.attendance}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
