import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataHandlerComponent } from './data-handler/data-handler.component';
import { D3VizComponent } from './data-handler/d3-viz/d3-viz.component';

@NgModule({
  declarations: [
    AppComponent,
    DataHandlerComponent,
    D3VizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
