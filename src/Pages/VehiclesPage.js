import React, {Component} from "react"
import {array} from "prop-types"

export default class extends Component {
    static propTypes = {
        vehicles: array.isRequired
    }

    convertVehicles = () => {
        const vehicleElements = []

        for (const vehicle of this.props.vehicles) {
            vehicleElements.push((
                <li>
                    <div>Name: {vehicle.name}</div>
                    <div>Model: {vehicle.model}</div>
                    <div>Max Speed: {vehicle.max_atmosphering_speed}</div>
                </li>
            ))
        }

        return vehicleElements
    }

    render() {
        return (
            <div>
                <ul>
                    {this.convertVehicles()}
                </ul>
            </div>
        )
    }
}