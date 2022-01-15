import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  person = {
    genero: '',
    notification: null,
    conditions: null
  }
  constructor() { }

  ngOnInit(): void {
  }

  saveForm() {

  }
}
