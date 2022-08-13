import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/modules/user/services/login/login-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public users = [];

  constructor(
    private _loginService: LoginService
  ) { }

  ngOnInit(): void {
    this._loginService.login().subscribe(data => {
      this.users = data
    });
  }

}
