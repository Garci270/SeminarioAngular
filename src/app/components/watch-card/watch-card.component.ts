import { Component, Input, OnInit ,ViewChild} from '@angular/core';
import { WatchCartService } from 'src/app/watch-cart.service';
import { CartComponent } from '../cart/cart.component';
import { Watch } from '../watch-list/Watch';

@Component({
  selector: 'app-watch-card',
  templateUrl: './watch-card.component.html',
  styleUrls: ['./watch-card.component.scss']
})
export class WatchCardComponent implements OnInit {
  @Input() watch: Watch;
  constructor(private WatchCart: WatchCartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.watch.quantity++;
    this.WatchCart.addToCart(this.watch);
    this.watch.quantity = 0;
    this.watch.stock = this.watch.stock-1;
  }

}
