import {Component} from 'react';
const Weather = props =>{
            return(
                <div>
                    {props.country && <p>Country:  {props.country}</p>}
                    {props.city && <p>City:  {props.city}</p>}
                    {props.temperture && <p>Temperture:  {props.temperture}</p>}
                    {props.pressure &&  <p>Pressure:  {props.pressure}</p>}
                    {props.description && <p>Description:  {props.description}</p>}
                    {props.error && <p>{props.error}</p>
                    }
                </div>
            )
        }
export default Weather