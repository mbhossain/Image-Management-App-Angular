import { Injectable } from '@angular/core';

import { Register } from 'src/app/models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterModelService {
  public registerObj: Register;

  constructor() {
    this.registerObj = new Register();
   }
}
