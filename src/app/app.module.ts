import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1 } from './component1/component1.component';
import { Component2 } from './component2/component2.component';
import { Component3 } from './component3/component3.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    Component2,
    Component3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
