// jshint esversion:9
/* jshint node: true */
/* jshint browser: true */
import axios from "axios";
require("dotenv").config();

console.log(process.env);

const api_key = process.env.API_KEY;
const url = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city, country) => {
	const data = await axios.get(
		`${url}?q=${city},${country}&appid=${api_key}&units=metric`
	);
	return data;
};
