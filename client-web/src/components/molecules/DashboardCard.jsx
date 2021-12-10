import React, { Component } from 'react';

class DashboardCard extends Component {
  constructor(props){
    super(props);
    this.state={

    };
  }

  render() {
    return (
      <div className="z-0 overflow-hidden w-full bg-white border border-gray-100 transition ease-in-out duration-500 shadow-sm hover:shadow-xl rounded-lg text-center">
        <div className="z-0 overflow-hidden" style={{display: !!this.props.data.imgPath ? 'block' : 'none' }}>
          <img src={this.props.data.imgPath} alt="" className='w-full h-48 object-cover z-0 transition ease-in-out duration-500 transform hover:scale-125' />
        </div>
        <div className="p-2">
          <h4 className="text-lg tracking-wider font-medium">{this.props.data.title}</h4>
          {/* <p className="card-text text-secondary">
              {this.props.data.title}
          </p> */}
          <button disabled={this.props.data.disabled}
          onClick={this.props.data.handler}
          className="px-1 py-0.5 bg-blue-500 border border-blue-600 rounded-md text-white hover:bg-transparent hover:border-blue-600 hover:text-blue-600 focus:outline-none transition ease-in-out duration-500 font-medium tracking-wide text-xs">{this.props.data.button}</button>
        </div>
      </div>
    );
  }

  onClick() {

  }
}

// const DashboardCard = props => {
//     return(
//         <div className="card text-center">
//             {/* <div className="overflow">
//                 <img src={img1} alt="Image 1" className='card-img-top' />
//             </div> */}
//             <div className="card-body text-dark">
//                 <h4 className="card-title">Card Title</h4>
//                 <p className="card-text text-secondary">
//                     Buna buna
//                 </p>
//                 <button disabled = {props.disabled}
//                 onClick = {props.data.handler}
//                 className="btn btn-outline-success">{props.data.button}</button>
//             </div>
//         </div>
//     );
// };

export default DashboardCard;