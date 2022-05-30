import { Component, OnInit } from '@angular/core';
import { JSONData } from 'src/app/json';
import { PetInterface } from 'src/app/pet-interface';

@Component({
  selector: 'app-mariyam-sarah-atri',
  templateUrl: './mariyam-sarah-atri.component.html',
  styleUrls: ['./mariyam-sarah-atri.component.css']
})
export class MariyamSarahAtriComponent implements OnInit {

  pets: PetInterface[]= JSONData

  constructor() { }

  ngOnInit(): void {
  }

}
