import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TinyServiceService } from './tiny-s.service';
import{FormsModule} from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TinyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
