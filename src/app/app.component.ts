import { Component } from '@angular/core';
import { TinyServiceService } from './tiny-s.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TinyCloud';
  a;
  constructor(private tinyService:TinyServiceService){}
  ngOnInit(){
  
this.tinyService.get();


  }

  get_editor_content(){
    this.a=this.tinyService.get_editor_content();
  }
  set_editor_content(a){
    this.a=this.tinyService.set_editor_content(a);
  }
 
}
