export interface Api {
  id?:number;
  q: string;
}

export interface SearchResult {
  country:string;
  flag:string
 
}


export interface SearchResult1 {
  image?:string;
  title?:string;
  sourceName?: string;
  author?: string;
  desc?: string;
  url?: string;
  published?: any;
  content?: string;
 
}