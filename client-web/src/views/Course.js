import { Link, useParams } from 'react-router-dom';

const Course = ({ attendances }) => {
  let { courseId } = useParams();
  const attendancesFromCourse = attendances.filter(attendance => attendance.courseId == courseId);

  return (
    <>
      {attendancesFromCourse.map((attendance) => {
          return (
            <div>
              <Link to={`/course/${attendance.id}`}>{attendance.studentId}</Link>
            </div>
          );
        })}
    </>
  );
}

export default Course;
