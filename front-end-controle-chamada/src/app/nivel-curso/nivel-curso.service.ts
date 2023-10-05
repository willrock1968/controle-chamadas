import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NivelCursoService {

  private header: any = {headers: 
    new HttpHeaders({'Accept': 'application/json',
     'Content-Type': 'application/json'    
  })}

  constructor(private http: HttpClient) { }
  
  
  getNivelCurso()
  {
    return this.http.get(`${environment.apiUrl}/getNivelCurso`, this.header);
  }

  saveNivelCurso(nivelCurso: any)
  {
    return this.http.post(`${environment.apiUrl}/saveNivelCurso`, nivelCurso, this.header);
  }
}
