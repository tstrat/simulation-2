import React, { Component } from "react"
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { updateMortgage, updateRent, clearAll } from '../../../ducks/reducer';
import axios from 'axios';

class WizardThree extends Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
    }

    submit() {
        const { name, address, city, state, zip, img, mortgage, rent } = this.props;
    
        const newProperty = {
            name,
            address,
            city,
            state,
            zip,
            img,
            mortgage,
            rent
        }

        axios.post('/api/houses', newProperty)
        .then(res => {
            this.props.clearAll();
        })
        .catch(error => console.log('Error in submitting new property: ', error));
    }

    render() {
        return (
            <div>
                <h3>Recommended Rent: $0</h3>
                <h2>Monthly Mortgage Amount</h2>
                <input 
                    onChange={e => this.props.updateMortgage(e.target.value)} 
                    value={this.props.mortgage}
                />
                <h2>Desired Monthly Rent</h2>
                <input 
                    onChange={e => this.props.updateRent(e.target.value)} 
                    value={this.props.rent}
                />


                <div className="wizardButtons">
                    <Link to="/" onClick={() => this.submit()}>Submit</Link>
                    <Link to="/wizard/2">Previous Step</Link>
                </div>
            </div>
    )}
}

const mapStateToProps = (storeState) => {
    const { name, address, city, state, zip, img, mortgage, rent } = storeState;
    return {
        name,
        address,
        city,
        state,
        zip,
        img,
        mortgage,
        rent
    }
}


export default connect(mapStateToProps, {updateMortgage, updateRent, clearAll})(WizardThree);