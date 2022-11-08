import { Component, Input, OnInit ,ViewChild} from '@angular/core';
import { WatchCartService } from '../../watch-cart.service';
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
    this.WatchCart.cart.subscribe(e=>{
      console.log(e);
    });
  }

  addToCart(){
    if(this.watch.stock > 0){
      this.watch.quantity++;
      this.WatchCart.addToCart(this.watch);
      this.watch.quantity = 0;
      this.watch.stock = this.watch.stock-1;
    }
  }

}
