import React, { Component } from 'react';

class Alerts extends Component {
    constructor(props) {
        super(props);
        
    }
    showAlert()
    {
        return this.props.data.map(element=>
        <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="mr-3">
                <div className="icon-circle bg-primary">
                    <i className={element.className}></i>
                </div>
            </div>
            <div>
        <div className="small text-gray-500">{element.date}}</div>
        <span className="font-weight-bold">{element.alertmsg}</span>
            </div>
        </a>);
      
    }
    
    render() {
        return (
            <div>
                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-bell fa-fw"></i>
                
                <span className="badge badge-danger badge-counter"> {this.props.counter} +</span>
              </a>
              
              <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 className="dropdown-header">
                  Alerts Center
                </h6>
                {this.showAlert()}
                <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </div>
        );
    }
}

export default Alerts;