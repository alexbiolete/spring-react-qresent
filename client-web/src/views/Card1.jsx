import "./card-style.css"
import React, { Component } from 'react';

class Card1 extends Component {
    constructor(props){
        super(props);
        this.state={

        };
    }

    render() {
        return(
            <div className="card text-center">
                <div className="overflow" style={{display: !!this.props.data.imgPath ? 'block' : 'none' }}>
                    <img src={this.props.data.imgPath} alt="" className='card-img-top' />
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{this.props.data.title}</h4>
                    {/* <p className="card-text text-secondary">
                        {this.props.data.title}
                    </p> */}
                    <button disabled = {this.props.data.disabled}
                    onClick = {this.props.data.handler}
                    className="btn btn-outline-success">{this.props.data.button}</button>
                </div>
            </div>
        );
    }

    onClick() {

    }
}

// const Card1 = props => {
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

export default Card1;