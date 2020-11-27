import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchResult, SearchResult1 } from '../models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  
  code ="";
  country="";
  apikey="0659de3cb3c842c78bce3a6785bcae5e";
  results:any;
  image:any;
  pageSize:number = 30;
  category:string = 'general'
  searchResults:SearchResult1[]=[]
  
  constructor(private router:Router, private activatedRoute: ActivatedRoute, private http:HttpClient) { }

 async ngOnInit(): Promise<void>{

    this.code = this.activatedRoute.snapshot.params['code']
    this.country = this.activatedRoute.snapshot.params['country']
    console.log(this.country)
    
    const url=`https://newsapi.org/v2/top-headlines?country=${this.code}&category=${this.category}&pageSize=${this.pageSize}&apiKey=${this.apikey}`

    await this.http.get<any>(url).toPromise()
    .then(resp =>{
      const results = resp.articles
      this.searchResults = results.map(r=> {
        return {
          sourceName: r.source.name,
          title: r.title,
          image: r.urlToImage,
          author:r.author,
          desc:r.description,
          url:r.url,
          published:r.publishedAt,
          content:r.content,
        } as SearchResult1
      })
      console.log('this search'+this.searchResults)
      
    })
  
  }
  saveArticle(){
      alert('i got no time and exam is very very difficult')
  }

}
