import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private header: any = {headers: 
    new HttpHeaders({'Accept': 'application/json',
     'Content-Type': 'application/json'    
  })}

  constructor(private http: HttpClient) { }
  
  login(credentials: {email: string, password: string})
  {
    return this.http.post(`${environment.apiUrl}/login`, credentials, this.header);
  }
}
