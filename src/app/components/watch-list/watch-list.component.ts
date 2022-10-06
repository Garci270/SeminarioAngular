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
      image: 'https://content.rolex.com/dam/2022/upright-bba-with-shadow/m268655-0019.png?impolicy=v6-upright&imwidth=270',
      clearance: true, 
      quantity:0
    },
    {
      name: 'AIR-KINK',
      color: 'Plata',
      detail: 'El Reloj de hogar',
      price: 100000,
      stock: 20,
      image: 'https://content.rolex.com/dam/2022/upright-bba/m126900-0001.png?impolicy=v6-upright',
      clearance: true, 
      quantity:0
    },
    {
      name: 'GMT-MASTER',
      color: 'Cobre',
      detail: 'El Reloj cosmopolitano',
      price: 30000,
      stock: 88,
      image: 'https://content.rolex.com/dam/2021/upright-bba/m126711chnr-0002.png',
      clearance: false, 
      quantity:0
    },
    {
      name: 'DATEJUST ',
      color: 'Oro',
      detail: 'El Reloj clasico de referencia',
      price: 540000,
      stock: 70,
      image: 'https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126333-0021.png?impolicy=v6-upright&imwidth=270',
      clearance: false, 
      quantity:0
    },
    {
      name: 'EXPLORER',
      color: 'Oro y Plata',
      detail: 'El Reloj cosmopolitano',
      price: 30000,
      stock: 88,
      image: 'https://content.rolex.com/dam/2022/upright-bba/m124270-0001.png?impolicy=v6-upright',
      clearance: false, 
      quantity:0
    },
    {
      name: 'OYSTER PERPETUAL',
      color: 'Plata',
      detail: 'La esencia del Oyster',
      price: 30000,
      stock: 88,
      image: 'https://content.rolex.com/dam/2022/upright-bba-with-shadow/m124300-0001.png?imwidth=380',
      clearance: false, 
      quantity:0
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
