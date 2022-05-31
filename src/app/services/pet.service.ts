import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JSONData } from '../json';
import { PetInterface } from '../pet-interface';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor() { }

getJSONData(): Observable<PetInterface[]>{
  const pets = of(JSONData)
  return pets
}

}
