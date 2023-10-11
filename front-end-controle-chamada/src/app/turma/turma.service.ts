import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private header: any = {headers: 
    new HttpHeaders({'Accept': 'application/json',
     'Content-Type': 'application/json'    
  })}

  constructor(private http: HttpClient) { }  
  
  getTurma()
  {
    return this.http.get(`${environment.apiUrl}/getTurma`, this.header);
  }

  saveTurma(turma: any)
  {
    return this.http.post(`${environment.apiUrl}/saveTurma`, turma, this.header);
  }
}
