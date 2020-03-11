import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  /* primer metodo obtener el TopGetLines */
  getTopHeadLines() {
    return this.http
    .get<RespuestaTopHeadLines>(`http://newsapi.org/v2/top-headlines?country=us&apiKey=b56a99e555ac4eb5a430847e3645fccd`);
  }
}
