import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProfileSidebar from '../components/molecules/ProfileSidebar';
import Table from '../components/organisms/Table';

const Profile = ({
  subjects,
  authenticatedUserName,
  authenticatedUserUsername,
  authenticatedUserEmail
}) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'ID',
        accessor: 'id'
      }
    ],
    []
  );

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
          <h1 className="uppercase font-semibold tracking-widest text-sm">{'Enrolled subjects'}</h1>
          <div className="flex flex-col space-y-2">
            {subjects.length > 0 ? (
              subjects.map((subject) => {
                return (
                  <Link
                    to={`/subject/${subject.id}`}
                    className="flex shadow-inner m-1 px-4 py-2 space-x-1 rounded-lg hover:bg-gray-100 transition ease-in-out duration-500"
                  >
                    <h2 className="font-medium">{subject.name}</h2>
                    <p className="font-extralight">{'(ID: '}{subject.id}{')'}</p>
                  </Link>
                );
              })
            ) : (
              <span>
                {'The user is not enrolled in any subject.'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
