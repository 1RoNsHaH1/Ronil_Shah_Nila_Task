import './courseInfo.css'
import "bootstrap/dist/css/bootstrap.min.css";

interface CourseInfoProps {
  course: {
    courseCode: string;
    courseName: string;
    courseType: string;
    coursePeriod: string;
    credits: { Lecture: number; Tutorial: number; Practical: number; Project: number };
    courseOutcomes: string[];
    mappedToThisCourse: string[];
  };
}

const CourseInfo = ({ course }: CourseInfoProps) => {
  return (
    <div className='border rounded'>
    <section className='courseInfo'>
      <label><strong>Course Code:</strong></label>
      <p>{course.courseCode}</p>
      <label><strong>Course Name:</strong></label>
      <p>{course.courseName}</p>
      <label><strong>Course Type:</strong></label>
      <p>{course.courseType}</p>
      <label><strong>Course Period:</strong></label>
      <p>{course.coursePeriod}</p>
      <label><strong>Credits:</strong></label>
      <p className='credits'><span>Lecture - <b>{course.credits.Lecture}</b></span><span>Tutorial - <b>{course.credits.Tutorial}</b></span><span>Practical - <b>{course.credits.Practical}</b></span><span>Project - <b>{course.credits.Project}</b></span></p>
      <label><strong>Course Outcomes:</strong></label>
      <p className='courseOutcomes'>{course.courseOutcomes.map((i) => <span className="badge text-bg-success">{i}</span>)}</p>
      <label><strong>Mapped to this Course:</strong></label>
      {course.mappedToThisCourse.map((i) => <span className="badge text-bg-primary">{i}</span>)}
    </section>
    </div>
  );
};

export default CourseInfo;
