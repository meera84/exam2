import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchResult } from '../models';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  q=""
  searchResults: SearchResult[]=[]

  constructor(private router: Router, private activatedRoute:ActivatedRoute, private http:HttpClient) { }
  
  results:any
  support = "au;be;bg;br;ca;ch;cn;co;cu;cz;de;eg;fr;gb;gr;hk;hu;id;ie;il;in;it;jp;kr;lt;lv;ma;mx;my;ng;nl;no;nz;ph;pl;pt;ro;rs;ru;sa;se;sg;si;sk;th;tr;tw;ua;us;ve;za"  
  async ngOnInit(): Promise<void> {
    
    this.results= await this.http.get(`https://restcountries.eu/rest/v2/alpha?codes=${this.support}`).toPromise()
    console.log(this.results)

  }



}
