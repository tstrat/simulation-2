import React, { Component } from "react"
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { updateImg } from '../../../ducks/reducer';

const imgStyle = {
    "height": "200px"
}
class WizardTwo extends Component {
    render() {
        return (
            <div>
                <h2>Image URL</h2>
                <input 
                    onChange={e=> this.props.updateImg(e.target.value)} 
                    value={this.props.img}
                />
                <h2>Preview of Image:</h2>
                <img src={this.props.img} alt="preview" style={imgStyle}/>
                <div className="wizardButtons">
                    <Link to="/wizard/3">Next Step</Link>
                    <Link to="/wizard/1">Previous Step</Link>
                </div>
            </div>
    )}
}
const mapStateToProps = (state) => {return { img: state.img }};
export default connect(mapStateToProps, {updateImg})(WizardTwo);