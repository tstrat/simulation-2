import React, { Component } from "react"
import { connect } from "react-redux";
import { updateName, updateAddress, updateCity, updateState, updateZip } from '../../../ducks/reducer';
import { Link } from 'react-router-dom';

class WizardOne extends Component {
    render () {
        return (
            <div className="wizard">
                <h3>Property Name</h3>
                <input 
                    placeholder="Enter property name" 
                    onChange={e=> this.props.updateName(e.target.value)}
                    value={this.props.name}
                />
                <h3>Address</h3>
                <input 
                    placeholder="Enter address" 
                    onChange={e=> this.props.updateAddress(e.target.value)}
                    value={this.props.address}
                />
                <h3>City</h3>
                <input 
                    placeholder="Enter city name" 
                    onChange={e=> this.props.updateCity(e.target.value)}
                    value={this.props.city}
                />
                <h3>State</h3>
                <input 
                    placeholder="Enter State ID" maxLength="2" 
                    onChange={e=> this.props.updateState(e.target.value)}
                    value={this.props.state}
                />
                <h3>Zip</h3>
                <input 
                    type='number'
                    placeholder="Enter zip code" 
                    onChange={e=> this.props.updateZip(e.target.value)}
                    value={this.props.zip}
                />
                <div className="wizardButtons">
                    <Link to="/wizard/2">Next Step</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (storeState) => {
    const { name, address, city, state, zip } = storeState;
    return {
        name,
        address,
        city,
        state,
        zip
    }
}

export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updateState, updateZip})(WizardOne);