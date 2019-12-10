import { Component } from '@angular/core';
import { TinyServiceService } from './tiny-s.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TinyCloud';
  constructor(private tinyService:TinyServiceService){}
  ngOnInit(){
  
this.tinyService.get();
  }
}
