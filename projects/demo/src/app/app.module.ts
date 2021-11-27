import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ngb5SimpleTableModule } from 'ngb5-simple-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ngb5SimpleTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
