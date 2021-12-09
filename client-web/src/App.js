import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { dbApiUrl } from './app/config';
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Profile from './views/Profile';
import { default as PublicLayout } from "./layouts/Public";
import { subjects } from './testing/subjects';
import DashboardProfessor from './views/DashboardProfessor';
import DashboardStudent from './views/DashboardStudent';
import DashboardAdmin from './views/DashboardAdmin';
import Development from './views/Development';
import GenerateQR from './views/GenerateQR';
import Subject from './views/Subject';
import Course from './views/Course';

const App = () => {
  const [authenticatedUserId, setAuthenticatedUserId] = useState('');
  const [authenticatedUserName, setAuthenticatedUserName] = useState('Account');
  const [authenticatedUserUsername, setAuthenticatedUserUsername] = useState('');
  const [authenticatedUserEmail, setAuthenticatedUserEmail] = useState('');

  const [subjects, setSubjects] = useState([]);
  const [courses, setCourses] = useState([]);
  const [attendances, setAttendances] = useState([]);

  // Used when submitting an attendance
  const attendance = {
    courseId: 1,
    // studentId: 3
    studentId: parseInt(authenticatedUserId)
  };

  useEffect(() => {
    setAuthenticatedUserId(localStorage.getItem('user_id'));
    setAuthenticatedUserName(localStorage.getItem('user_name'));
    setAuthenticatedUserUsername(localStorage.getItem('user_username'));
    setAuthenticatedUserEmail(localStorage.getItem('user_email'));
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

  // const userTypes = [
  //   {
  //     value: "student",
  //     label: "Student",
  //   },
  //   {
  //     value: "professor",
  //     label: "Professor",
  //   },
  //   {
  //     value: "admin",
  //     label: "Administrator",
  //   }
  // ];
  const [userType, setUserType] = useState("professor");

  // var dashboardComponent;
  // if (userType === "student") {
  //   dashboardComponent = DashboardStudent;
  // } else if (userType === "professor") {
  //   dashboardComponent = DashboardProfessor;
  // } else if (userType === "admin") {
  //   dashboardComponent = DashboardAdmin;
  // }

  return (
    <BrowserRouter>
      <PublicLayout userType={userType} authenticatedUserName={authenticatedUserName} setAuthenticatedUserName={setAuthenticatedUserName}>
        <Switch>
          <Route path="/" exact>
            <Home
              // userTypes={userTypes}
              // userType={userType}
              // setUserType={setUserType}
            />
          </Route>
          <Route path="/login" exact>
            <Login setUserType={setUserType} setAuthenticatedUserName={setAuthenticatedUserName} />
          </Route>
          <Route path="/signup" component={Signup} exact />
          <Route path="/profile" exact>
            <Profile subjects={subjects} authenticatedUserName={authenticatedUserName} authenticatedUserUsername={authenticatedUserUsername} authenticatedUserEmail={authenticatedUserEmail} />
          </Route>
          {/* <Route path="/dashboard" component={dashboardComponent} exact /> */}
          <Route path="/professor/dashboard" component={DashboardProfessor} exact />
          <Route path="/student/dashboard" component={DashboardStudent} exact />
          <Route path="/admin/dashboard" component={DashboardAdmin} exact />
          <Route path="/dev" component={Development} exact />
          <Route path="/generate-qr" exact>
            <GenerateQR dbApiUrl={dbApiUrl} attendance={attendance} attendances={attendances} setAttendances={setAttendances} />
          </Route>
          <Route path="/subject/:subjectId" exact>
            <Subject courses={courses} />
          </Route>
          <Route path="/course/:courseId" exact>
            <Course attendances={attendances} />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </PublicLayout>
    </BrowserRouter>
  );
};

export default App;
