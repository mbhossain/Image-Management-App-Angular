import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Register } from 'src/app/models/register';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  private registerUrl = "http://localhost:8800/api/auth/register";

  constructor(
    private http: HttpClient
  ) { }

  register(register: Register): Observable<Register> {
    return this.http.post<Register>(this.registerUrl, register, httpOptions);
  }

}
