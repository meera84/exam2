import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Api, Countries, News } from './models';
export const normalizeSearchText = (q:string) =>
{q.trim().toLowerCase()}

@Injectable()
export class NewsDatabase extends Dexie {

  noApi:boolean;

  private api:Dexie.Table<Api,number>;
  private countries: Dexie.Table<Countries>;
  private news: Dexie.Table<News>;

  constructor() { 
    super('apidb')
    this.version(1).stores({
      api:'++id,q',
      countries:'code,country',
      news:'++id,title'
    })
    this.api = this.table('api')
    this.countries = this.table('countries')
    this.news = this.table('news')

  }

  async saveAPI(s:Api):Promise<any>{
    const resultCount = await this.api
    .where('q').equals(s.q)
    .count()

    if (resultCount <=0)
      return this.api.add(s)

  }

  async getAPI():Promise<Api[]>{
    return this.api.orderBy('q').toArray()
  }
  
  async deleteAPI():Promise<any>{
    
    const key = await this.getAPI()
    // console.log("keyis"+key[0].q)
    this.api
    .where('q').equals(key[0].q)
    .delete()
    
    }

    async checkAPI():Promise<any>{
    
      const key = await this.getAPI()
      // console.log("keyis"+key[0].q)
      const keyCount = await this.api
      .where('q').equals(key[0].q)
      .count()
      if (keyCount <=0)
        {
          this.noApi= true
        }
        else
        {
          this.noApi= false
        }
      
      }
  



  }

  

