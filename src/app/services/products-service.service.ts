import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// No angular não é tão comum se utilizar o axios, muitas vezes é optado pelo httpClient
// tendo em vista que o próprio angular já fornece esse module
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http"


// Todas as services devem possuir um @injectable
// porque assim nós indicamos essa classe como disponível para ser fornecida e injetada como dependencia
// assim podemos só colocar a classe como parametro do construtor do componente e ela será 
// injetada automáticamente
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private apiUrl = 'https://the-cocktail-db.p.rapidapi.com/search.php'
  constructor(private httpClient:HttpClient) {
    
   }

   fetchData(search:string):Observable<any>{
    const options = {
      params: new HttpParams().set('s',search),
      headers:new HttpHeaders({
        'X-RapidAPI-Key':'dd506fe580msdebc4a73649853p118e04jsna51f66eeb566',
        'X-RapidAPI-Host':'the-cocktail-db.p.rapidapi.com'
      })
    }
   return this.httpClient.get(this.apiUrl, options)
   }
}
