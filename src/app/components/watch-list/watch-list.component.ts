import { Component, OnInit } from '@angular/core';
import { Watch } from './Watch';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  watchs: Watch[] = [
    {
      name: 'YATCH-MASTER',
      color: 'Negro',
      detail: 'El Reloj de los oceanos abiertos',
      price: 150000,
      stock: 100,
      image: 'https://raw.githubusercontent.com/Garci270/SeminarioAngular/main/src/assets/images/reloj1.webp',
      clearance: true, 
      quantity:0
    },
    {
      name: 'AIR-KINK',
      color: 'Plata',
      detail: 'El Reloj de hogar',
      price: 100000,
      stock: 20,
      image: 'https://raw.githubusercontent.com/Garci270/SeminarioAngular/main/src/assets/images/reloj2.webp',
      clearance: true, 
      quantity:0
    },
    {
      name: 'GMT-MASTER',
      color: 'Cobre',
      detail: 'El Reloj cosmopolitano',
      price: 30000,
      stock: 88,
      image: 'https://raw.githubusercontent.com/Garci270/SeminarioAngular/main/src/assets/images/reloj3.webp',
      clearance: false, 
      quantity:0
    },
    {
      name: 'DATEJUST ',
      color: 'Oro',
      detail: 'El Reloj clasico de referencia',
      price: 540000,
      stock: 70,
      image: 'https://raw.githubusercontent.com/Garci270/SeminarioAngular/main/src/assets/images/reloj4.webp',
      clearance: false, 
      quantity:0
    },
    {
      name: 'EXPLORER',
      color: 'Oro y Plata',
      detail: 'El Reloj cosmopolitano',
      price: 30000,
      stock: 88,
      image: 'https://raw.githubusercontent.com/Garci270/SeminarioAngular/main/src/assets/images/reloj5.webp',
      clearance: false, 
      quantity:0
    },
    {
      name: 'OYSTER PERPETUAL',
      color: 'Plata',
      detail: 'La esencia del Oyster',
      price: 30000,
      stock: 88,
      image: 'https://raw.githubusercontent.com/Garci270/SeminarioAngular/main/src/assets/images/reloj6.webp',
      clearance: false, 
      quantity:0
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
