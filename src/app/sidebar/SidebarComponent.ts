import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';
import {DownloadService }from  './../download.service'


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild('asTitle') asTitle: ElementRef;
  @ViewChild('asTitle2') asTitle2: ElementRef;

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
      .start();
  };

  initEffect2 = () => {
    const target = this.asTitle2.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'Black'
    });

    writer
      .changeCursorColor('black')
      .type('Conoce un poco mas sobre mi')
      .rest(50000)
      .clear()
      .start();
  };
// metodo para descargar hoja de vida
  download() {
    DownloadService.downloadFile
      ('http://localhost:4200/assets/Hoja_de_vida_oscar.pdf',
        'Hoja de vida'
      );
  }
}


// Definicion del arreglo
class LinkModel {
  link: string;
  icon: string;
}
