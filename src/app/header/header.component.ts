import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links:Array<LinkModel>=[
    {
      link:'https://www.linkedin.com/in/oscar-eduardo-castro-5068a6178/',
      icon:'<i class="uil uil-linkedin"></i>'
    },
    {
      link:'https://github.com/oscarerc',
      icon:'<i class="uil uil-github"></i>'
    },
    {
      link:'oscareduardorodriguezcastro3@gmail.com',
      icon:'<i class="uil uil-envelope"></i>'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
// Definicion del arreglo
class LinkModel{
  link:string;
  icon:string;
}