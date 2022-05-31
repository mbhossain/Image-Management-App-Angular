import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JSONData } from '../json';
import { PetInterface } from '../pet-interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private url = "https://6296548c810c00c1cb73c3f0.mockapi.io/pets"

  constructor(private http: HttpClient) { }

  getJSONData(): Observable<PetInterface[]> {
    // const pets = of(JSONData)
    // return pets

    return this.http.get<PetInterface[]>(this.url);
  }

  updatePetFavorite(pet: PetInterface): Observable<PetInterface> {
    const updateUrl = `${this.url}/${pet.id}`;
    return this.http.put<PetInterface>(updateUrl, pet, httpOptions);
  }

}
