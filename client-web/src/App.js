import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { dbApiUrl } from './app/config';
import Guest from "./layouts/Guest";
import Auth from "./layouts/Auth";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Profile from './views/Profile';
import User from './views/User';
import GenerateQR from './views/GenerateQR';
import ValidateQR from './views/ValidateQR';
import Subject from './views/Subject';
import Course from './views/Course';
import DashboardProfessor from './views/DashboardProfessor';
import DashboardStudent from './views/DashboardStudent';
import DashboardAdmin from './views/DashboardAdmin';
import Development from './views/Development';

const App = () => {
  const [authenticatedUserId, setAuthenticatedUserId] = useState('');
  const [authenticatedUserName, setAuthenticatedUserName] = useState('Account');
  const [authenticatedUserUsername, setAuthenticatedUserUsername] = useState('');
  const [authenticatedUserEmail, setAuthenticatedUserEmail] = useState('');
  const [authenticatedUserRole, setAuthenticatedUserRole] = useState('student');

  const [users, setUsers] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [courses, setCourses] = useState([]);
  const [attendances, setAttendances] = useState([]);

  // Used when submitting an attendance
  const attendance = {
    courseId: 3,
    studentId: parseInt(authenticatedUserId)
  };

  useEffect(() => {
    setAuthenticatedUserId(localStorage.getItem('user_id'));
    setAuthenticatedUserName(localStorage.getItem('user_name'));
    setAuthenticatedUserUsername(localStorage.getItem('user_username'));
    setAuthenticatedUserEmail(localStorage.getItem('user_email'));
    setAuthenticatedUserRole(localStorage.getItem('user_role'));
  }, []);

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchSubjects();
      setSubjects(dataFromServer);
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchUsers();
      setUsers(dataFromServer);
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchCourses();
      setCourses(dataFromServer);
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchAttendances();
      setAttendances(dataFromServer);
    };

    getData();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch (`${dbApiUrl}/user/all`);
    const data = await response.json();

    console.log(response);
    console.log(data);
    return data;
  };

  const fetchSubjects = async () => {
    const response = await fetch (`${dbApiUrl}/subject/all`);
    const data = await response.json();

    console.log(response);
    console.log(data);
    return data;
  };

  const fetchCourses = async () => {
    const response = await fetch (`${dbApiUrl}/course/all`);
    const data = await response.json();

    console.log(response);
    console.log(data);
    return data;
  };

  const fetchAttendances = async () => {
    const response = await fetch (`${dbApiUrl}/attendance/all`);
    const data = await response.json();

    console.log(response);
    console.log(data);
    return data;
  };

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <BrowserRouter>
      {!localStorage.getItem('user_username') ? (
        <Switch>
          <Route path="/" exact>
            <Guest>
              <Login
                setAuthenticatedUserName={setAuthenticatedUserName}
                refreshPage={refreshPage}
              />
            </Guest>
          </Route>
          <Route path="/login" exact>
            <Guest>
              <Login
                setAuthenticatedUserName={setAuthenticatedUserName}
                refreshPage={refreshPage}
              />
            </Guest>
          </Route>
          <Route path="/signup" exact>
            <Guest>
              <Signup refreshPage={refreshPage} />
            </Guest>
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              <Home
              />
            </Auth>
          </Route>
          <Route path="/profile" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              <Profile
                subjects={subjects}
                authenticatedUserName={authenticatedUserName}
                authenticatedUserUsername={authenticatedUserUsername}
                authenticatedUserEmail={authenticatedUserEmail}
              />
            </Auth>
          </Route>
          <Route path="/user/:userId" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              <User
                users={users}
                subjects={subjects}
              />
            </Auth>
          </Route>
          <Route path="/dashboard" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              {authenticatedUserRole === "teacher" && <DashboardProfessor />}
              {authenticatedUserRole === "student" && <DashboardStudent />}
              {authenticatedUserRole === "admin" && <DashboardAdmin />}
            </Auth>
          </Route>
          <Route path="/dev" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              <Development />
            </Auth>
          </Route>
          {/* <Route path="/generate-qr" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              <GenerateQR
                dbApiUrl={dbApiUrl}
                attendance={attendance}
                attendances={attendances}
                setAttendances={setAttendances}
              />
            </Auth>
          </Route> */}
          <Route path="/validate-qr" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              <ValidateQR
                dbApiUrl={dbApiUrl}
                attendance={attendance}
                attendances={attendances}
                setAttendances={setAttendances}
              />
            </Auth>
          </Route>
          <Route path="/subject/:subjectId" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              <Subject
                courses={courses}
                authenticatedUserName={authenticatedUserName}
                authenticatedUserUsername={authenticatedUserUsername}
                authenticatedUserEmail={authenticatedUserEmail}
              />
            </Auth>
          </Route>
          <Route path="/course/:courseId" exact>
            <Auth
              authenticatedUserName={authenticatedUserName}
              setAuthenticatedUserName={setAuthenticatedUserName}
              refreshPage={refreshPage}
            >
              <Course
                attendances={attendances}
                courses={courses}
                users={users}
                authenticatedUserName={authenticatedUserName}
                authenticatedUserUsername={authenticatedUserUsername}
                authenticatedUserEmail={authenticatedUserEmail}
              />
            </Auth>
          </Route>
          <Route path="*" exact>
            <Guest>
              <NotFound />
            </Guest>
          </Route>
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
