import { Link, useParams } from 'react-router-dom';

const Subject = ({ courses }) => {
  let { subjectId } = useParams();
  const coursesFromSubject = courses.filter(course => course.subjectId == subjectId);

  return (
    <>
      {coursesFromSubject.map((course) => {
          return (
            <div>
              <Link to={`/course/${course.id}`}>{course.name}</Link>
            </div>
          );
        })}
    </>
  );
}

export default Subject;
