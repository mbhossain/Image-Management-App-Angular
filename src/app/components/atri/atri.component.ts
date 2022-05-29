import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atri',
  templateUrl: './atri.component.html',
  styleUrls: ['./atri.component.css']
})
export class AtriComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('Favorite')
  }

}
