import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Watch } from './components/watch-list/Watch';

@Injectable({
  providedIn: 'root'
})
export class WatchCartService {

  private _cart: Watch[] = [];
  cart: BehaviorSubject<Watch[]> = new BehaviorSubject(this._cart);

  constructor() { }

  addToCart(watch:Watch){
    let item = this._cart.find((v1)=> v1.name == watch.name && v1.color == watch.color);
    if(!item){
      this._cart.push({...watch});
    }else{
      item.quantity += watch.quantity;
    }
    console.log(this._cart);
    this.cart.next(this._cart);
  }

  removeFromCart(i:Watch){
    let item = this._cart.find((v1)=> v1.name == i.name && v1.color == i.color);
    if(item){
      if(item.quantity > 1){
        item.quantity = item.quantity-1;
      }else{
        let index = this._cart.indexOf(i);
        this._cart.splice(index,1)
      }
    }
    this.cart.next(this._cart);
  }

}
