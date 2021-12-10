import React, { Component } from 'react';
import DashboardCard from '../components/molecules/DashboardCard';

class DashboardProfesor extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tabs: [
        {
          title: '',
          button: 'Edit profile',
          handler: this.editProfileHandler,
          disabled: false,
          imgPath: ''
        },
        {
          title: '',
          button: 'View subjects',
          handler: this.viewCoursesHandler,
          disabled: false,
          imgPath: ''
        },
        {
          title: '',
          button: 'Scan QR',
          handler: this.qrScanHandler,
          disabled: false,
          imgPath: ''
        },
        {
          title: '',
          button: 'Statistics',
          handler: this.statisticsHandler,
          disabled: false,
          imgPath: ''
        }
      ]
    };
  }

  editProfileHandler = () => {
    console.log('Edit!');
  }

  viewCoursesHandler = () => {
    console.log('View Courses!');
    let path = 'student/courses';
    this.props.history.push(path);
  }

  qrScanHandler = () => {
    console.log('Open Scanner!');
  }

  statisticsHandler = () => {
    console.log('View Stats!');
    let path = 'student/statistics';
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <DashboardCard data = {this.state.tabs[0]}/>
        <DashboardCard data = {this.state.tabs[1]}/>
        <DashboardCard data = {this.state.tabs[2]}/>
        <DashboardCard data = {this.state.tabs[3]}/>
      </div>
    );
  }
}

export default DashboardProfesor;