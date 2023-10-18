import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatriculaAlunoService {

  private header: any = {headers: 
    new HttpHeaders({'Accept': 'application/json',
     'Content-Type': 'application/json'    
  })}

  constructor(private http: HttpClient) { }  

  matriculaAluno(alunoJson: any)
  {
    return this.http.post(`${environment.apiUrl}/matriculaAluno`, alunoJson, this.header);
  }

  
  getMatricula()
  {
    return this.http.get(`${environment.apiUrl}/getMatricula`, this.header);
  }
}
