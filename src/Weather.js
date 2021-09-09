import React, { Component } from 'react';
import axios from "axios";

const API_KEY = "c6311dfb17fc7cc58dd1dbaa267a1062";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";


class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city:props.city,
            weather:'',
            temperature:'',
            humidity:'',
        }
    }
    render() {
        axios.get(BASE_URL+"?id="+this.state.city+"&appid="+API_KEY+"&lang=ja&units=metric")
            .then(res=>{
                this.setState({
                    weather: res.data.weather[0].description,
                    temperature: res.data.main.temp,
                    humidity: res.data.main.humidity
                });
            });
        return (
            <div id="weatherCon">
                <div id="img">
                    <span id="icon"></span>
                </div>

                <div id="wea">
                    <div><h4 id="weather">{this.state.weather}</h4></div>
                    <div>気温　<span id="temperature">{this.state.temperature}</span>℃</div>
                    <div>湿度　<span id="humidity">{this.state.humidity}</span>％</div>
                </div>

            </div>
        );
    }
}

export default Weather;