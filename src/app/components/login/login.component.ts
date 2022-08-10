import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public users = [];

  constructor(
    private _petService: PetService
  ) { }

  ngOnInit(): void {
    this._petService.login().subscribe(data => {
      this.users = data
      console.log('this.users:', this.users)
      debugger
    });
  }

}
