import { Link, useParams } from 'react-router-dom';
// import { useResizeColumns } from 'react-table';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import ProfileSidebar from '../components/molecules/ProfileSidebar';

const Course = ({
  attendances,
  users,
  authenticatedUserName,
  authenticatedUserUsername,
  authenticatedUserEmail
}) => {
  const fileName = "attendance_list";
  const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (attendances, fileName) => {
    const ws = XLSX.utils.json_to_sheet(attendances);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  let { courseId } = useParams();
  const attendancesFromCourse = attendances.filter(attendance => attendance.courseId == courseId);

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
          <div className="flex items-center justify-between">
            <h1 className="uppercase font-semibold tracking-widest text-sm">{'Attendances'}</h1>
            <button className="px-1 py-0.5 rounded-md bg-green-700 text-white transition ease-in-out duration-500 hover:bg-transparent tracking-wide text-xs border border-green-700 hover:text-green-700" onClick={(e) => exportToCSV(attendances, fileName)}>Export attendance list</button>
          </div>
          <div className="flex flex-col space-y-2">
            {attendancesFromCourse.length > 0 ? (
              attendancesFromCourse.map((attendance) => {
                let user = users.find(user => user.id == attendance.studentId);
                return (
                  <Link
                    to={`/user/${user.id}`}
                    className="flex shadow-inner m-1 px-4 py-2 space-x-1 rounded-lg"
                  >
                    <h2 className="font-medium">
                      {user.name}
                    </h2>
                    <p className="font-extralight">{'(ID: '}{attendance.id}{')'}</p>
                  </Link>
                );
              })
            ) : (
              <span>
                {'The user has no attendance.'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
