import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Fetch data using a Promise. Source: the public NEWS API - https://newsapi.org/


@Injectable()
export class NewsProvider {

  newsAPI = 'https://newsapi.org/v2/top-headlines?country=';
  parameters = '&apiKey=';
  apiKey = '4d5c380820324d96a2ca2e037eda6495';

  constructor(public http: HttpClient) {
  }

  getNews(ISO) {
    return new Promise(resolve => {
      this.http.get(this.newsAPI + ISO + this.parameters + this.apiKey).subscribe(
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
