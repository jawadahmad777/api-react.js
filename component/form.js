import {Component} from 'react';
const Form = (props) => {
    return(
            <form onSubmit={props.getWeather}>
            <input type="text" placeholder='City' name= 'city' />
            <input type="text" placeholder='Country' name= 'country'/>
            <button>See Weather</button>
        </form>
    )
}
export default Form