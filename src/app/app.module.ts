import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { CartComponent } from './components/cart/cart.component';
import { WatchCardComponent } from './components/watch-card/watch-card.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchListComponent,
    CartComponent,
    WatchCardComponent,
    NewsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
