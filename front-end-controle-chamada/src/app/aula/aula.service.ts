import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  private header: any = {headers: 
    new HttpHeaders({'Accept': 'application/json',
     'Content-Type': 'application/json'    
  })}

  constructor(private http: HttpClient) { }  
  
  getAula()
  {
    return this.http.get(`${environment.apiUrl}/getAula`, this.header);
  }

  saveAula(turma: any)
  {
    return this.http.post(`${environment.apiUrl}/saveAula`, turma, this.header);
  }
}  
