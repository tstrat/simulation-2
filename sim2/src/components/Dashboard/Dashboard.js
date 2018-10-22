import React, { Component } from "react"
import { Link } from 'react-router-dom';
import axios from 'axios';
import House from '../House/House';
import { connect } from 'react-redux';

import './dashboard.css';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
        this.houseUrl = '/api/houses';

        this.fetchHouseData = this.fetchHouseData.bind(this);
        this.removeHouse = this.removeHouse.bind(this);
    }

    componentDidMount() {
        this.fetchHouseData();
    }

    componentDidUpdate(newProps) {
        console.log("update hit", this.props);
        console.log('new', newProps);
        if (this.props.dashboard !== newProps.dashboard) {
            this.fetchHouseData();
        }
    }

    fetchHouseData() {
        axios.get(this.houseUrl)
        .then(res => {
            this.setState({
                houses : res.data
            })
        })
        .catch( error => console.log('Error in componentDidMount Dashboard:', error)) ;
    }

    removeHouse (id) {
        axios.delete(`${this.houseUrl}/${id}`)
        .then(() => {
            this.fetchHouseData();
        })
        .catch( error => console.log('Error in removeHouse Dashboard.js:', error)) ;
    }

    render() {
        const { houses } = this.state;
        const houseListings = houses.map((house, i) => 
            <House  key={i}
                    id={house.id}
                    name={house.name}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    zip={house.zip} 
                    img={house.img}
                    mortgage={house.mortgage}
                    rent={house.rent}
                    removeFn = {this.removeHouse}/>
        );
        return (
            <div className="container">
                <div className="header">
                    <h1>Dashboard</h1>
                    <Link to="/wizard">Add New Property</Link>
                </div>
                <hr/>
                <h3>Home Listings</h3>
                {houseListings}
            </div>
    )}
}

const mapStateToProps = (state) => {
    return { dashboard : state.dashboard }
}
export default connect(mapStateToProps)(Dashboard);