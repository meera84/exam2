import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { CountryComponent } from './components/country.component';
import { NewsComponent } from './components/news.component';
import { ApiComponent } from './components/api.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CountryComponent,
    NewsComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
