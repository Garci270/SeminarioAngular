import { Component, Input, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { WatchCartService } from '../../watch-cart.service';
import { Watch } from '../watch-list/Watch';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cartClass: String;
  
  cart: Observable<Watch[]>;


  constructor(private WatchCart: WatchCartService) {
     this.cart = WatchCart.cart.asObservable();
   }

  ngOnInit(): void {
  }

  removeFromCart(i:number){
    this.WatchCart.removeFromCart(i);
  }


}
