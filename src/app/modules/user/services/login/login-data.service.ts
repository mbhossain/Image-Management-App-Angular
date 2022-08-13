import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Login } from 'src/app/models/login-interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = "http://localhost:8800/api/hotels";

  constructor(
    private http: HttpClient
  ) { }

  login(): Observable<Login[]> {
    return this.http.get<Login[]>(this.loginUrl);
  }

}
