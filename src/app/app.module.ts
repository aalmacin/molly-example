import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MollyComponentLibraryModule } from 'molly-component-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MollyComponentLibraryModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
