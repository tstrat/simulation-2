const INITIAL_STATE = {
    name : '',
    address: '',
    city : '',
    state : '',
    zip : 0,
    img : '',
    mortgage: 0,
    rent: 0,
    dashboard : true
}

const CLEAR_ALL = "CLEAR_ALL";
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMG = "UPDATE_IMG";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";
const TOGGLE_DASHBOARD = "TOGGLE_DASHBOARD";

export default function reducer(state = INITIAL_STATE, action){
    switch ( action.type ) {
        
        case UPDATE_NAME:
            return Object.assign({},state, { name: action.payload });
        
        case UPDATE_ADDRESS:
            return Object.assign({},state, { address: action.payload });
        
        case UPDATE_CITY:
            return Object.assign({},state, { city: action.payload });
        
        case UPDATE_STATE:
            return Object.assign({},state, { state: action.payload });
        
        case UPDATE_ZIP:
            return Object.assign({},state, { zip: action.payload });
        
        case UPDATE_IMG:
            return Object.assign({},state, { img: action.payload });
        
        case UPDATE_MORTGAGE:
            return Object.assign({},state, { mortgage: action.payload });
        
        case UPDATE_RENT:
            return Object.assign({},state, { rent: action.payload });
        
        case TOGGLE_DASHBOARD:
            return {...state, dashboard : !state.dashboard };
        case CLEAR_ALL:
            return INITIAL_STATE;
        default:
            return state;
    }
}

export function clearAll() {
    return {
        type: CLEAR_ALL
    }
}

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImg(url) {
    return {
        type: UPDATE_IMG,
        payload: url
    }
}

export function updateMortgage(price) {
    return {
        type: UPDATE_MORTGAGE,
        payload: price
    }
}

export function updateRent(price) {
    return {
        type: UPDATE_RENT,
        payload: price
    }
}

export function toggleDashboard() {
    return {
        type: TOGGLE_DASHBOARD
    }
}