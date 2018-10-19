import React, { Component } from "react"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAll } from '../../ducks/reducer';

import WizardOne from './WizardOne/WizardOne';
import WizardTwo from './WizardTwo/WizardTwo';
import WizardThree from './WizardThree/WizardThree';

import './wizard.css';

class Wizard extends Component {
    render() {
        const number = parseInt(this.props.match.params.id);
        const wizardToRender = number === 3 ? <WizardThree/> :
                                number === 2 ? <WizardTwo/>:
                                <WizardOne/>;
        return (
            <div className="container">
                <div className="wizardbar">
                    <h1>Add New Listing</h1>
                    <Link className="cancel" to="/" onClick={() => this.props.clearAll()}>Cancel</Link>
                </div>
                
                {wizardToRender}
            </div>
    )}
}

export default connect(null, {clearAll}) (Wizard);