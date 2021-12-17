import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import  Typewriter from 't-writer.js';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild('asTitle') asTitle: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.initEffect();
  }

  ngOnInit(): void {
  }

  initEffect = () => {
    const target = this.asTitle.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'Black'
    });
    
    writer
      .changeCursorColor('black')
      .type('Oscar Eduardo Rodriguez')
      .rest(50000)
      .clear()
      // .type('¿Ya viste mis videos?')
      // .rest(2000)
      .start();
  };

  download(){
    
  }
}


// Definicion del arreglo
class LinkModel{
  link:string;
  icon:string;
}
