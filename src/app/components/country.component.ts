import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Countries, SearchResult } from '../models';
import { NewsDatabase } from '../news.database';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  q=""
  searchResults: SearchResult[]=[]
  countries:Countries[]=[]
  code:any;
  name:any;
  flag:any;



  constructor(private router: Router, private activatedRoute:ActivatedRoute, private http:HttpClient, private apidb: NewsDatabase) { }
  
  results:any
  support = "au;be;bg;br;ca;ch;cn;co;cu;cz;de;eg;fr;gb;gr;hk;hu;id;ie;il;in;it;jp;kr;lt;lv;ma;mx;my;ng;nl;no;nz;ph;pl;pt;ro;rs;ru;sa;se;sg;si;sk;th;tr;tw;ua;us;ve;za"  
  url = `https://restcountries.eu/rest/v2/alpha?codes=${this.support}`
  async ngOnInit(): Promise<void> {
    
    let gotCountry = await this.gotCountry()
    if (gotCountry.length <= 0) {
      this.saveCountries()
    }
    else {
      this.countries = gotCountry
    }

    this.results= await this.http.get(`https://restcountries.eu/rest/v2/alpha?codes=${this.support}`).toPromise()
    console.log(this.results)

    this.saveCountries()

  }

  async gotCountry() {
    let gotCountry = await this.apidb.gotCountries()
    return gotCountry
  }


  saveCountries() { 
    this.http.get(this.url)
    .toPromise()
    .then(async resp => { 
      //@ts-ignore
      this.countries = resp.map(c => {
        return {
          code: c['alpha2Code'],
          country: c['name'],
          flag: c['flag']
        } as Countries
      })
      await this.apidb.saveCountries(this.countries);
    })

}
}
