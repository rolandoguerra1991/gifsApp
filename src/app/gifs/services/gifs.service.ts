import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private APIKEY:string = "gwYmNzCsQm0Yct0CzJ1umliYT3pp6lo6";
  private _historial:string[] = [];
  public resultados:Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http:HttpClient) { }

  buscarGifs(query:string = '') {
    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10);
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=gwYmNzCsQm0Yct0CzJ1umliYT3pp6lo6&q=${query}`)
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });
  }

}
