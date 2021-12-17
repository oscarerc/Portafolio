import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

static downloadFile(){
  const downloadInstance = document.createElement('a');
  downloadInstance.href = ''
}


}
