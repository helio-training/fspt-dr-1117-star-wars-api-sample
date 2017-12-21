import React, { Component } from "react"
import { object } from "prop-types"

//Could just do this like PersonPage
class HomeworldPage extends Component {
    static propTypes = {
        planet: object.isRequired
    }

    render() {
        return (
            <div>
                <h1>{this.props.planet.name}</h1>
                <p>Diameter: {this.props.planet.diameter}</p>
            </div>
        )
    }
}

export default HomeworldPage