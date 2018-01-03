import React, { Component } from 'react';
import './App.css';
import PersonPage from "./Pages/PersonPage"
import HomeworldPage from "./Pages/HomeworldPage"
import VehiclesPage from "./Pages/VehiclesPage"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  state = { 
    person: { name: "Select a Person" },
    planet: { name: "Select a Planet" },
    vehicles: [],
    films: []
  }

  getPerson = async (id) => {
    const response = await fetch(`https://swapi.co/api/people/${id}`)
    const person = await response.json()
   
    return person
  }

  getData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    return data
  }

  async componentWillMount() {
    const person1 = await this.getPerson(1)
    const planet = await this.getData(person1.homeworld)
    
    const vehicles = []
    for (const vehicleUrl of person1.vehicles) {
      const vehicle = await this.getData(vehicleUrl)
      vehicles.push(vehicle)
    }

    const films = []
    for (const filmUrl of person1.films){
      const film = await this.getData(filmUrl)
      films.push(film)
    }

    this.setState({ person: person1, planet, vehicles, films })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <Link to="/">Person</Link> 
              <Link to="/homeworld">Homeworld</Link> 
              <Link to="/vehicles">Vehicles</Link>
            </nav>
            
            <Route exact path="/" component={() => <PersonPage name={this.state.person.name}
                                                               hairColor={this.state.person.hair_color}
                                                               homeworldName={this.state.planet.name}
                                                               skinColor={this.state.person.skin_color} />}/>
            <Route path="/homeworld" component={() => <HomeworldPage planet={this.state.planet} />}/>
            <Route path="/vehicles" component={() => <VehiclesPage vehicles={this.state.vehicles} /> } />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
