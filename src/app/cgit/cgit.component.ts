import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-cgit',
  templateUrl: './cgit.component.html',
  styleUrls: ['./cgit.component.scss']
})
export class CgitComponent implements OnInit {
  // variable que alamcenara la lista de repositorios
  repos:any;
  config:any;

  constructor(private githubService:GithubService) {
   }


  ngOnInit(): void {
    this.githubService.loadRepos().subscribe(  res => {
      this.repos=res;
    });
    
  }

}


