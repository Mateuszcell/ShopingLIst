import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipListComponent } from './recipes/recip-list/recip-list.component';
import { RecipComponent } from './recipes/recip/recip.component';
import { RecipDtailsComponent } from './recipes/recip-detail/recip-dtails.component';
import { RecipItemComponent } from './recipes/recip-list/recip-item/recip-item.component';
import { ShoppingListComponent } from './shoppinglist/shopping-list/shopping-list.component';
import { ShopingEditComponent } from './shoppinglist/shopping-edit/shoping-edit.component';
import { DropdownDirective } from './dropdown.directive';
import {ShoppingListService} from "./shoppinglist/shopping-list/shopping-list.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipListComponent,
    RecipComponent,
    RecipDtailsComponent,
    RecipItemComponent,
    ShoppingListComponent,
    ShopingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
