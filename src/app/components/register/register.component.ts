import { Component, OnInit } from '@angular/core';

import { Register } from 'src/app/models/register';
import { RegisterDataService } from 'src/app/modules/user/services/register/register-data.service';
import { RegisterModelService } from 'src/app/modules/user/services/register/register-model.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public registermodel: RegisterModelService
    , public registerData: RegisterDataService
  ) { }

  ngOnInit(): void {
  }

  userRegister() {
    this.registerData.register(this.registermodel.registerObj).subscribe(data => {
      console.log('item:', data);
    });
  }

}
