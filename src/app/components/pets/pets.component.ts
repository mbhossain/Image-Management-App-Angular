import { Component, OnInit } from '@angular/core';
// import { JSONData } from 'src/app/json';
import { PetInterface } from 'src/app/pet-interface';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: PetInterface[] = [];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.getJSONData().subscribe(pets => this.pets = pets)
  }

  addFavoritePet(pet: PetInterface) {
    pet.favorite = !pet.favorite;
    this.petService.updatePetFavorite(pet).subscribe();
  }

  onDelete(pet: PetInterface) {
    this.petService.deletePet(pet).subscribe(() => (this.pets = this.pets.filter(res => res.id !== pet.id)))

  }

  addPet(pet: PetInterface) {
    this.petService.addPet(pet).subscribe(pet => this.pets.push(pet))
  }

}
