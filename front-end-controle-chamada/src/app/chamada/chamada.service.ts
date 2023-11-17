import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChamadaService {

  private header: any = {headers: 
    new HttpHeaders({'Accept': 'application/json',
     'Content-Type': 'application/json'    
  })}

  constructor(private http: HttpClient) { }  

  selecionaAlunosMatriculadosAulaTurma(idaula: any)
  {
    return this.http.post(`${environment.apiUrl}/selecionaAlunosMatriculadosAulaTurma`, idaula, this.header);
  }  
 
}