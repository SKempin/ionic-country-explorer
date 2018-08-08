import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Fetch data using a Promise. Source: the public Open Weather API - https://api.openweathermap.org/


@Injectable()
export class OpenWeatherProvider {
  weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
  parameters = '&units=metric&appid=';
  apiKey = 'a3eae44c26370088bab40caa93a7ad68';

  constructor(public http: HttpClient) {
  }

  getWeather(city) {
    return new Promise(resolve => {
      this.http.get(this.weatherAPI + city + this.parameters + this.apiKey).subscribe(
        data => {
          resolve(data);
        },
        err => {
          console.log(err);
        }
      );
    });
  }
}
