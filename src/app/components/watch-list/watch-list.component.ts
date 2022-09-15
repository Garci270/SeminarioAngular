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
      name: ' ',
      type: ' ',
      detail: ' ',
      price: 100,
      stock: 100,
      image: ' ',
      clearance: true, 
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
