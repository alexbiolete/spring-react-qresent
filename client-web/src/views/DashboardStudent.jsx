import React, { Component } from 'react';
import DashboardCard from '../components/molecules/DashboardCard';

class DashboardProfesor extends Component {
    constructor (props){
        super(props);
        this.state={
            tabs: [
                {
                    title: '',
                    button: 'Editare Profil',
                    handler: this.editProfileHandler,
                    disabled: false,
                    imgPath: ''
                },
                {
                    title: '',
                    button: 'Vizualizare Materii',
                    handler: this.viewCoursesHandler,
                    disabled: false,
                    imgPath: ''
                },
                {
                    title: '',
                    button: 'Scaneaza QR',
                    handler: this.qrScanHandler,
                    disabled: false,
                    imgPath: ''
                },
                {
                    title: '',
                    button: 'Statistici',
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

    render(){
        return(
            <div className="container-fluid d-flex justify-content-center dashboard">
                <div className="row">
                    <div className="col-md-4">
                        <DashboardCard data = {this.state.tabs[0]}/>
                    </div>
                    <div className="col-md-4">
                        <DashboardCard data = {this.state.tabs[1]}/>
                    </div>
                    <div className="col-md-4">
                        <DashboardCard data = {this.state.tabs[2]}/>
                    </div>
                    <div className="col-md-4">
                        <DashboardCard data = {this.state.tabs[3]}/>
                    </div>
                </div>
            </div>
        );
    }


}

export default DashboardProfesor;