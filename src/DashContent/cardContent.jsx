import React, { Component } from 'react'

export default class CardContent extends Component {
  
    render() {
        return (
            
            <div className="col-xl-3 col-md-6 mb-4">
              <div className={this.props.Border}>
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className= {this.props.Textcolor}>{this.props.Title}</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">{this.props.Value}</div>
                    </div>
                    <div className="col-auto">
                      <i className={this.props.Classname}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

   
        

            


            

        )
    }
}