import { Component, OnInit } from '@angular/core';
import {Ingridient} from "../../shared/ingridients.model";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
ingridients: Ingridient[] =[
  new Ingridient("apples",5),
  new Ingridient("tomatoes",5),
];
  constructor() { }

  ngOnInit(): void {
  }
onAdd(items:Ingridient){
    this.ingridients.push(items);
}
}
