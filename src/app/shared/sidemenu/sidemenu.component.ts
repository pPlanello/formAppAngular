import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [];
  reactiveMenu: MenuItem[] = [];
  authMenu: MenuItem[] = [];

  constructor() {
    this.templateMenu = [
      { text: 'Básico', route: '/template/basic' },
      { text: 'Dinámico', route: '/template/dynamic' },
      { text: 'Switches', route: '/template/switches' },
    ];

    this.reactiveMenu = [
      { text: 'Básico', route: '/reactive/basic' },
      { text: 'Dinámico', route: '/reactive/dynamic' },
      { text: 'Switches', route: '/reactive/switches' },
    ];

    this.authMenu = [
      { text: 'Registo', route: '/auth/register' },
      { text: 'Login', route: '/auth/login' },
    ];
  }


}
