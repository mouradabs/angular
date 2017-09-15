import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TsiComponent } from './tsi/tsi.component';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TsiComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent, TsiComponent]
})
export class AppModule { }
