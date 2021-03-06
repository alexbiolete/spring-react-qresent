import { Link, useParams } from 'react-router-dom';
import ProfileSidebar from '../components/molecules/ProfileSidebar';

const Subject = ({
  courses,
  authenticatedUserName,
  authenticatedUserUsername,
  authenticatedUserEmail
}) => {
  let { subjectId } = useParams();
  const coursesFromSubject = courses.filter(course => course.subjectId == subjectId);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="col-span-1">
        <ProfileSidebar
          userName={authenticatedUserName}
          userUsername={authenticatedUserUsername}
          userEmail={authenticatedUserEmail}
        />
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-3">
        <div className="bg-white shadow-sm rounded-lg px-6 py-4 space-y-4">
          {/* <Table columns={columns} data={subjects} /> */}
          <h1 className="uppercase font-semibold tracking-widest text-sm">{'Courses'}</h1>
          <div className="flex flex-col space-y-2">
            {coursesFromSubject.length > 0 ? (
              coursesFromSubject.map((course) => {
                return (
                  <Link
                    to={`/course/${course.id}`}
                    className="flex shadow-inner m-1 px-4 py-2 space-x-1 rounded-lg hover:bg-gray-100 transition ease-in-out duration-500"
                  >
                    <h2 className="font-medium">{course.name}</h2>
                    <p className="font-extralight">{'(ID: '}{course.id}{')'}</p>
                  </Link>
                );
              })
            ) : (
              <span>
                {'The user has not attended any course.'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subject;
