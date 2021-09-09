import React, { useState } from 'react';
import './App.css';
import Weather from './Weather.js';

function App() {

	const [city,setVal] = useState('');

	let cityList = [
		{value:'1850147', name:'東京'},
		{value:'7839805', name:'メルボルン'},
		{value:'1261481', name:'ニューデリー'},
		{value:'524901', name:'モスクワ'},
		{value:'2643743', name:'ロンドン'}
	]

	const onChange = (event)=>{
		setVal(event.target.value);
	}

	return (
		<div class="container">
			<div class="weatherArea">
				<h3>今の天気は・・・</h3>
				{city !== '' &&
					<Weather city={city} />
				}
			</div>

			<form id="form">
				<p id="error-message"></p>
				{cityList.map((value)=>(
					<div>
						<input class="city form-check-input" type="radio" name="city" value={value.value} checked={city === value.value} onChange={onChange} /> <span>{value.name}</span>
					</div>
				))}
			</form>
		</div>
	);

}

export default App;
