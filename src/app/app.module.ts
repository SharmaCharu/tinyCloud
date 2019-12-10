import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TinyServiceService } from './tiny-s.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TinyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
