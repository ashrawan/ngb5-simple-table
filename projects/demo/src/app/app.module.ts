import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ngb5SimpleTableModule } from 'ngb5-simple-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './home-wrapper/simple/simple.component';
import {HighlightService} from './services/highlight.service';
import { HomeWrapperComponent } from './home-wrapper/home-wrapper.component';
import { SidebarComponent } from './home-wrapper/components/sidebar/sidebar.component';
import { HomePageComponent } from './home-wrapper/home-page/home-page.component';
import { CustomCssComponent } from './home-wrapper/custom-css/custom-css.component';
import { ActionTemplateComponent } from './home-wrapper/action-template/action-template.component';
import { CodeShowcaseComponent } from './home-wrapper/code-showcase/code-showcase.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    HomeWrapperComponent,
    SidebarComponent,
    HomePageComponent,
    CustomCssComponent,
    ActionTemplateComponent,
    CodeShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ngb5SimpleTableModule,

    HttpClientModule
  ],
  providers: [HighlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
