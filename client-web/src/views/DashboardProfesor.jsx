import React, { Component } from 'react';
import Card1 from './Card1';
import img1 from '../assets/a.jpg';


class DashboardProfesor extends Component {

    constructor(props){
        super(props);
        this.state={
            tabs: [
                {
                    title: '',
                    button: 'Incepe Cursul',
                    handler: this.startLectureHandler,
                    disabled: false,
                    imgPath: img1
                },
                {
                    title: '',
                    button: 'Verificare Activitate',
                    disabled:true,
                    imgPath: img1
                },
                {
                    title: '',
                    button: 'Incheie Cursul',
                    handler: this.finishLectureHandler,
                    disabled: true,
                    imgPath: img1
                },
                {
                    title: '',
                    button: 'Statistici',
                    handler: this.statisticsHandler,
                    imgPath: img1
                },
                {
                    title: '',
                    button: 'Export',
                    imgPath: img1
                },
                {
                    title: '',
                    button: 'Setari Curs',
                    handler: this.settingsHandler,
                    imgPath: img1
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

    render(){
        return(
            <div className="container-fluid d-flex justify-content-center dashboard">
                <div className="row">
                    <div className="col-md-4">
                        <Card1 data = {this.state.tabs[0]}/>
                    </div>
                    <div className="col-md-4">
                        <Card1 data = {this.state.tabs[1]}/>
                    </div>
                    <div className="col-md-4">
                        <Card1 data = {this.state.tabs[2]}/>
                    </div>
                    <div className="col-md-4">
                        <Card1 data = {this.state.tabs[3]}/>
                    </div>
                    <div className="col-md-4">
                        <Card1 data = {this.state.tabs[4]}/>
                    </div>
                    <div className="col-md-4">
                        <Card1 data = {this.state.tabs[5]}/>
                    </div>
                </div>
            </div>
        );
    }

    
}

export default DashboardProfesor;