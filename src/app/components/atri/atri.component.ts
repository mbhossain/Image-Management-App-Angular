import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PetInterface } from 'src/app/pet-interface';

@Component({
  selector: 'app-atri',
  templateUrl: './atri.component.html',
  styleUrls: ['./atri.component.css']
})
export class AtriComponent implements OnInit {

  @Input() pet: PetInterface
  @Output() onAddFavorite: EventEmitter<PetInterface> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onFavorite() {
    this.onAddFavorite.emit();
  }

}
