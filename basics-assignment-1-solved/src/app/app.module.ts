import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SuccesswarningComponent } from './successwarning/successwarning.component';
import { AlertwarningComponent } from './alertwarning/alertwarning.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccesswarningComponent,
    AlertwarningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
