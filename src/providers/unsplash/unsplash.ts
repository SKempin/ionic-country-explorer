import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// Fetch data using a Promise. Source: the public Unsplash API - https://api.unsplash.com

@Injectable()
export class UnsplashProvider {
  unsplashAPI = "https://api.unsplash.com/photos/random/?query=";
  parameters = "&orientation=landscape";
  apiKey =
    "&client_id=1b6433d78f0a9657607b2d62638260ec3c844dcf0d6b27666c9237d3e71c322f";

  constructor(public http: HttpClient) {}

  getPhoto(searchTerm) {
    return new Promise(resolve => {
      this.http
        .get(this.unsplashAPI + searchTerm + this.parameters + this.apiKey)
        .subscribe(
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
