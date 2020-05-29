import React, { Component } from 'react'
let url = "https://api.covid19api.com/summary";

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Countries:[]
    }

  }

  componentDidMount() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({
        Countries:data.Countries
      })
      console.log(this.state.Countries)
    })
  }
    render() {
      const {Countries} = this.state;
        return (
            <div class="container-fluid">

            <h1 class="h3 mb-2 text-gray-800">Report</h1>
       <p class="mb-4">DataTables gives the information about COVID-19 data.</p>


       <div class="card shadow mb-4">
         <div class="card-header py-3">
           <h6 class="m-0 font-weight-bold text-primary">Report DataTable</h6>
         </div>
         <div class="card-body">
           <div class="table-responsive">
             <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
               <thead>
                 <tr>
                   <th>Country</th>
                   <th>CountryCode</th>
                   <th>Slug</th>
                   <th>NewConfirmed</th>
                   <th>TotalConfirmed</th>
                   <th>NewDeaths</th>
                   <th>TotalDeaths</th>
                   <th>NewRecovered</th>
                   <th>TotalRecovered</th>
                   <th>Date</th>
                 </tr>
               </thead>
               <tfoot>
                 <tr>
                   <th>Country</th>
                   <th>CountryCode</th>
                   <th>Slug</th>
                   <th>NewConfirmed</th>
                   <th>TotalConfirmed</th>
                   <th>NewDeaths</th>
                   <th>TotalDeaths</th>
                   <th>NewRecovered</th>
                   <th>TotalRecovered</th>
                   <th>Date</th>
                 </tr>
               </tfoot>
               <tbody>
               {Countries.map(data => {
                 return(
                  <tr key={data.objectID}>
                        <td>{data.Country}</td>
                        <td>{data.CountryCode}</td>
                        <td>{data.Slug}</td>
                        <td>{data.NewConfirmed}</td>
                        <td>{data.TotalConfirmed}</td>
                        <td>{data.NewDeaths}</td>
                        <td>{data.TotalDeaths}</td>
                        <td>{data.NewRecovered}</td>
                        <td>{data.TotalRecovered}</td>
                        <td>{data.Date}</td>
                        </tr>
                      )
                    })}
               </tbody>
             </table>
           </div>
         </div>
       </div> 
         </div>
        )
    }
}
