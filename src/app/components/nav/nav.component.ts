import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  cartClass:String = "shopping-cartNone";
  homeActive: boolean = true;
  constructor() {
   }

  ngOnInit(): void {
  }

  changeActive(i:boolean){
    this.homeActive = i;
  }


  
  openCart(){
    if(this.cartClass == "shopping-cartNone"){
      this.cartClass = "";
    }else{
      this.cartClass = "shopping-cartNone";
    }
  }

}
