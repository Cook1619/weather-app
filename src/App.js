import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    weather: []
  }

  componentDidMount() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "3a561501b0msh16a59d396fbec39p1cec1djsna11f2aa4f2bd"
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        Weather app
      </div>
    )
  }
}


