import { ErrorHandler, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { TODO_API } from 'api';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  listaDeTarefas = Array();

  constructor(private http: HttpClient) {}

  listarTarefas(){
    Observable<string[]>{
      return this.http.get<string[]>(`${TODO_API}/`)
    };
  }
}
