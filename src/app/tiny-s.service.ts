import { Injectable } from '@angular/core';
declare var tinymce: any;
@Injectable({
  providedIn: 'root'
})
export class TinyServiceService {

  constructor() { }

  get(){
    tinymce.init({
      selector: '#mytextarea',
      
    });
  }
}
