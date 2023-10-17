import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private header: any = {headers: 
    new HttpHeaders({'Accept': 'application/json',
     'Content-Type': 'application/json'    
  })}

  constructor(private http: HttpClient) { }  
  
  getAluno()
  {
    return this.http.get(`${environment.apiUrl}/getAluno`, this.header);
  }

  getAlunoById(idaluno: any)
  {
    return this.http.post(`${environment.apiUrl}/getAlunoById`, idaluno, this.header);
  }

  saveAluno(aluno: any)
  {
    return this.http.post(`${environment.apiUrl}/saveAluno`, aluno, this.header);
  }
}  
