import React, {Component} from "react"
import {array} from "prop-types"

export default class extends Component {
    static propTypes = {
        vehicles: array.isRequired
    }

    convertVehicles = () => {
        const vehicleElements = []

        for (const vehicle of this.props.vehicles) {
            vehicleElements.push(<li>{vehicle.name} {vehicle.model}</li>)
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