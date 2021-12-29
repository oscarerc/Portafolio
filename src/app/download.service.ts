import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

// cuando son estaticas no es necesario instanciar el servicio donde se va a usar;
static downloadFile(path: string, filename:string){
  const downloadInstance = document.createElement('a');
  downloadInstance.href = path;;
  downloadInstance.target ='_blank';
  downloadInstance.download=filename;;

  document.body.appendChild(downloadInstance);
  downloadInstance.click();
  document.body.removeChild(downloadInstance);
}


}
