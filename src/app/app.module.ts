import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipListComponent } from './recipes/recip-list/recip-list.component';
import { RecipComponent } from './recipes/recip/recip.component';
import { RecipDtailsComponent } from './recipes/recip-dtails/recip-dtails.component';
import { RecipItemComponent } from './recipes/recip-list/recip-item/recip-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipListComponent,
    RecipComponent,
    RecipDtailsComponent,
    RecipItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
