import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Fetch data using a Promise. Source: the public REST Countries API - https://restcountries.eu


@Injectable()
export class CountryDataProvider {

  restcountriesAPI = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag;currencies;capital;region;population;area;latlng;languages'
  constructor(public http: HttpClient) {
  }

  getCountries() {
    return new Promise(resolve => {
      this.http.get(this.restcountriesAPI).subscribe(data => {
        resolve(data);
        // console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
