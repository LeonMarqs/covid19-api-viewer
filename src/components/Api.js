import React from 'react';
import Axios from 'axios';

export default class CovidCountries extends React.Component {

  state = {
    countries: [],
    global: {}
  }

  componentDidMount() {
    Axios.get("https://api.covid19api.com/summary")
      .then((response) => {
        const countries = response.data.Countries;
        const global = response.data.Global;
        this.setState({ countries });
        this.setState({ global });
      });
  }

  render() {
    return (
      <ul>
        <li className="global">
            <h2>Global</h2>

            <div className="data">
              <p>Total confirmed: </p>
              <span>{this.state.global.TotalConfirmed}</span>
            </div>

            <div className="data">
              <p>Total deaths: </p> 
              <span>{this.state.global.TotalDeaths}</span>
            </div>

            <div className="data">
              <p>Total recovered: </p>
              <span>{this.state.global.TotalRecovered}</span>
            </div>
            
          </li>

        { this.state.countries.map(country => 
          <li key={country.Country}>
            <h2>{country.Country}</h2>

            <div className="data">
              <p>Total confirmed: </p>
              <span>{country.TotalConfirmed}</span>
            </div>

            <div className="data">
              <p>Total deaths: </p> 
              <span>{country.TotalDeaths}</span>
            </div>

            <div className="data">
              <p>Total recovered: </p>
              <span>{country.TotalRecovered}</span>
            </div>
            
          </li>
          )
        }
      </ul>
    )
  }
}