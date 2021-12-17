import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
// variable solo de lectura
  private readonly url = 'https://api.github.com/users/oscarerc/repos';

  constructor(private httpClient:HttpClient) { }

  
  loadRepos = () => {
   return this.httpClient.get(`${this.url}`)
   .pipe(
     map((item:any)=>item.filter(value =>!value.fork))
    );
  };

}

