import { Component, OnInit } from '@angular/core';
// import { JSONData } from 'src/app/json';
import { PetInterface } from 'src/app/pet-interface';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-mariyam-sarah-atri',
  templateUrl: './mariyam-sarah-atri.component.html',
  styleUrls: ['./mariyam-sarah-atri.component.css']
})
export class MariyamSarahAtriComponent implements OnInit {

  pets: PetInterface[] = [];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.getJSONData().subscribe(pets => this.pets = pets)
  }

  addFavoritePet(pet: PetInterface) {
    pet.favorite = !pet.favorite;
  }

}
