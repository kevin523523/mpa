import { Injectable } from '@angular/core';

//Importación del HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  //Atributo URL
  private URL: string = 'https://datamovies-509b7-default-rtdb.firebaseio.com/collection.json';

  constructor(private http: HttpClient) { }
  //Método con la petición HTTP
  getResponse() {
    return this.http.get(this.URL);
  }
}
