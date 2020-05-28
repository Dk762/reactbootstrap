import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
              <div className="card-body">
                <h4 className="small font-weight-bold">{this.props.Title} <span className="float-right">{this.props.Value}</span></h4>
                <div className="progress mb-4">
                  <div className={this.props.Classname} role="progressbar" style={this.props.style} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            
        )
    }
}
