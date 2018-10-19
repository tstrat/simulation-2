import React from "react"
import deleteButton from '../../media/delete_button.png';
import './house.css';

export default function House (props) {
    console.log(props);
    return (
        <div className="house">
            <img className="houseImg" src={props.img} alt="house" />
            <div>
                <h3>Property Name: {props.name}</h3>
                <h3>Address: {props.address}</h3>
                <h3>City: {props.city}</h3>
                <h3>State: {props.state}</h3>
                <h3>Zip Code: {props.zip}</h3>
            </div>
            <div>
                <h3>Mortgage: {props.mortgage}</h3>
                <h3>Rent :{props.rent}</h3>
            </div>
            <img className="deleteBtn" src={deleteButton} alt="delete button" onClick={()=>{props.removeFn(props.id)}}/>
        </div>
    ) 
}
