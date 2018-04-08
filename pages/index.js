import {Component} from 'react';
import Form from '../component/form';
import Weather from '../component/weather';
const api = '5cf69d86a4810fe647283fd660ea9465';
class Index extends Component{
    state = {
        temperture : undefined,
        city : undefined,
        country : undefined,
        pressure : undefined,
        description: undefined,
        error: undefined
    }
    
   getWeather =async (e) =>{
       e.preventDefault()
       const city = e.target.elements.city.value;
       const country = e.target.elements.country.value;
       const apiCall =  await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${api}`);
       const data = await apiCall.json();
if(city && country){
    console.log(data);
this.setState({
    temperture: data.list[0].main.temp,
    city: data.city.name,
    country: data.city.country,
    pressure: data.list[0].main.pressure,
    description: data.list[0].weather[0].description,
    error:''

})
}
else{
    console.log(data);
this.setState({
    temperture:undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    description: undefined,
    error:'Enter Locations'

})
}

   }
render(){
    return(
<div>
    <Form getWeather={this.getWeather}/>
    <Weather
     temperture = {this.state.temperture}
     city = {this.state.city}
     country = {this.state.country}
     pressure = {this.state.pressure}
     description = {this.state.description}
     error = {this.state.error}
    />
</div> 
)}}
export default Index
