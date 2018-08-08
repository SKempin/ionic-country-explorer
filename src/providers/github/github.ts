import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Fetch data using a Promise. Source: the public Github API - 'https://api.github.com


@Injectable()
export class GithubProvider {

  githubAPI = 'https://api.github.com/users/';

  constructor(public http: HttpClient) {
  }

  getUserData(user) {
    return new Promise(resolve => {
      this.http.get(this.githubAPI + user).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
