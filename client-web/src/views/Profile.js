import { useMemo } from 'react';
import Table from '../components/Table';

const Profile = ({ user, subjects }) => {
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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="col-span-1">
        <div className="rounded-lg shadow p-4 space-y-4">
          <div className="mx-auto rounded-full shadow-md w-32 h-32 flex justify-center items-center">
            <span className="font-semibold uppercase text-5xl">
              {user.name.substring(0, 2)}
            </span>
          </div>
          <div>
            <h1 className="font-semibold uppercase text-center text-xl">
              {user.name}
            </h1>
            <h2 className="font-light tracking-wider lowercase text-center text-lg">
              {'@'}{user.username}
            </h2>
          </div>
          <div className="flex items-center space-x-1 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="tracking-wide text-sm">
              {user.email}
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3">
        <Table columns={columns} data={subjects} />
      </div>
    </div>
  );
};

export default Profile;
