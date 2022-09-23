import { Component, Input, OnInit } from '@angular/core';
import { Watch } from '../watch-list/Watch';

@Component({
  selector: 'app-watch-card',
  templateUrl: './watch-card.component.html',
  styleUrls: ['./watch-card.component.scss']
})
export class WatchCardComponent implements OnInit {
  @Input() watch: Watch;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
