import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Watch } from './Watch';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  watchs: Watch[];
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.watchs = this.productService.watchs;
  }

}
