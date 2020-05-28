import React, { Component } from 'react'

export default class ProjectsButtons extends Component {
    render() {
        return (
            <div class={this.props.Classname}>
                  <div class="card-body">
                    {this.props.Title}
                    <div class="text-white-50 small">{this.props.Text}</div>
                  </div>
                </div>
        )
    }
}
