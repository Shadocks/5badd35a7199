import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Exercice1Component } from './exercice-1/exercice-1.component';
import { ColorDirective } from './exercice-1/color.directive';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    ColorDirective,
    HeaderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
