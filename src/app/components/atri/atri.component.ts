import { Component, Input, OnInit } from '@angular/core';
import { PetInterface } from 'src/app/pet-interface';

@Component({
  selector: 'app-atri',
  templateUrl: './atri.component.html',
  styleUrls: ['./atri.component.css']
})
export class AtriComponent implements OnInit {

  @Input() pet: PetInterface

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('Favorite')
  }

}
