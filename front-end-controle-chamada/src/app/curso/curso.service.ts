import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private header: any = {headers: 
    new HttpHeaders({'Accept': 'application/json',
     'Content-Type': 'application/json'    
  })}

  constructor(private http: HttpClient) { }  
  
  getCurso()
  {
    return this.http.get(`${environment.apiUrl}/getCurso`, this.header);
  }

  saveCurso(curso: any)
  {
    return this.http.post(`${environment.apiUrl}/saveCurso`, curso, this.header);
  }
}
