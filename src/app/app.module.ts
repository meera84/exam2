import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { CountryComponent } from './components/country.component';
import { NewsComponent } from './components/news.component';
//import { ApiComponent } from './components/api.component';
import { NewsDatabase } from './news.database';

const ROUTES: Routes=[
    {path:'',component: MainComponent},
   // {path:'api',component: ApiComponent},
    {path:'country',component: CountryComponent},
    // {path:'country/:code/:country',component: CountryComponent},
    {path:'news/:code/:country',component: NewsComponent},
    {path:'**',redirectTo:'/',pathMatch:'full'}
  ];
  
  

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CountryComponent,
    NewsComponent,
   // ApiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NewsDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
