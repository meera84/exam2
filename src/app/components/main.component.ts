import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from '../models';
import { NewsDatabase } from '../news.database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  form:FormGroup
  searches: Api[]=[]
  apikey1:string=""

  constructor(private fb: FormBuilder, private apidb:NewsDatabase, private router:Router) { }

  ngOnInit(): void {
    //also didnt have time to do the routing if apikey present.

    this.goroute()
  
    this.form = this.fb.group({
      q:this.fb.control("",[Validators.required])
    })

    this.apidb.getAPI()
    .then(result =>{
      this.searches = result.map(s=>{
        return s})
    })
  }

  async onDelete(){
    // console.log ('todelete')
    // const opt:Api={
    //   q:this.form.get('q').value
    // }
    await this.apidb.deleteAPI()
    //window.location.reload()

  }

  async onAdd(){
    console.log ('toadd')
    const opt:Api={
      q:this.form.get('q').value
    }
    await this.apidb.saveAPI(opt)
    
    //window.location.reload()

  }

  
  async goroute() {
    let apiKey1 = await this.apidb.apiRouting()
    console.log(apiKey1.length)
    
    if (apiKey1.length > 0) {
      this.router.navigate(['/countries']);
    }
    
  }

}
