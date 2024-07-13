import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamepediaBrachofficesComponent } from './gamepedia-brachoffices/gamepedia-brachoffices.component';
import { GamepediaProductsComponent } from './gamepedia-products/gamepedia-products.component';
import { GamepediaaccountComponent } from './gamepedia-account/gamepedia-account.component';
import { CartComponent } from './cart/cart.component';
import { GamePageComponent } from './game-page/game-page.component';
import { CaptchaComponent } from './captcha/captcha.component';

@NgModule({
  declarations: [
    AppComponent,
    GamepediaBrachofficesComponent,
    GamepediaProductsComponent,
    GamepediaaccountComponent,
    CartComponent,
    GamePageComponent,
    CaptchaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


