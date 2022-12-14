import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Watch } from './components/watch-list/Watch';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class WatchCartService {

  private _cart: Watch[] = [];
  cart: BehaviorSubject<Watch[]> = new BehaviorSubject(this._cart);

  constructor(public productService: ProductService) { }

  addToCart(watch:Watch){
    let item = this._cart.find((v1)=> v1.name == watch.name && v1.color == watch.color);
      if(!item){
        this._cart.push({...watch});
      }else{
        item.quantity += watch.quantity;
      }
      this.cart.next(this._cart);
  }

  removeFromCart(i:number){
    let item = this._cart[i];
    let itemOriginal = this.productService.watchs.find((v1)=> v1.name == item.name && v1.color == item.color)
    if(item && itemOriginal){
      if(item.quantity > 1){
        itemOriginal.stock++;
        item.quantity = item.quantity-1;
      }else{
        itemOriginal.stock++;
        this._cart.splice(i,1)
      }
    }
    this.cart.next(this._cart);
  }


  cleanCart(){
    this._cart.forEach(element => {
      this.productService.watchs.forEach(eleW =>{
        console.log("paso");
        if(element.name == eleW.name && eleW.color == element.color){
          eleW.stock += element.quantity;
        }
      })
    });
    this._cart = [];
    this.cart.next(this._cart);
  }

}
