import React, { Component } from 'react';
import DashboardCard from '../components/molecules/DashboardCard';
import ideaImage from '../resources/img/idea.jpg';


class DashboardProfessor extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tabs: [
        {
          title: '',
          button: 'Begin course',
          handler: this.startLectureHandler,
          disabled: false,
          imgPath: ideaImage
        },
        {
          title: '',
          button: 'Check attendance',
          disabled:true,
          imgPath: ideaImage
        },
        {
          title: '',
          button: 'End course',
          handler: this.finishLectureHandler,
          disabled: true,
          imgPath: ideaImage
        },
        {
          title: '',
          button: 'Statistics',
          handler: this.statisticsHandler,
          imgPath: ideaImage
        },
        {
          title: '',
          button: 'Export',
          imgPath: ideaImage
        },
        {
          title: '',
          button: 'Settings',
          handler: this.settingsHandler,
          imgPath: ideaImage
        },
      ]
    };

    // this.startLectureHandler = this.startLectureHandler.bind(this);
    }

    startLectureHandler = () => {
      console.log('START!');
      // eslint-disable-next-line
      this.state.tabs[0].disabled = true;
      // eslint-disable-next-line
      this.state.tabs[1].disabled = false;
      // eslint-disable-next-line
      this.state.tabs[2].disabled = false;
      this.setState(this.state.tabs)
    }

    finishLectureHandler = () => {
      console.log('STOP!');
      // eslint-disable-next-line
      this.state.tabs[0].disabled = false;
      // eslint-disable-next-line
      this.state.tabs[2].disabled = true;
      this.setState(this.state.tabs)
    }

    statisticsHandler = () => {
      let path = '/statistics';
      this.props.history.push(path);
    }

    settingsHandler = () => {
      let path = '/settings-course';
      this.props.history.push(path);
    }

    render() {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <DashboardCard data = {this.state.tabs[0]}/>
          <DashboardCard data = {this.state.tabs[1]}/>
          <DashboardCard data = {this.state.tabs[2]}/>
          <DashboardCard data = {this.state.tabs[3]}/>
          <DashboardCard data = {this.state.tabs[4]}/>
          <DashboardCard data = {this.state.tabs[5]}/>
        </div>
      );
    }


}

export default DashboardProfessor;
