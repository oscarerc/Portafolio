import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
// variable solo de lectura
  private readonly url = 'https://api.github.com/users/oscarerc/repos';

  constructor(private httpClient:HttpClient) { }
  
  loadRepos = () => {
   return this.httpClient.get(`${this.url}`);
  };
}

