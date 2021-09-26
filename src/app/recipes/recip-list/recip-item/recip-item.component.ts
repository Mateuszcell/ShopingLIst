import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipService} from "../recip.service";

@Component({
  selector: 'app-recip-item',
  templateUrl: './recip-item.component.html',
  styleUrls: ['./recip-item.component.css']
})
export class RecipItemComponent implements OnInit {
  @Input() recip: Recipe;

  constructor(private recipService: RecipService) {
  }

  ngOnInit(): void {
  }

  onSelected() {
this.recipService.recipSelected.emit(this.recip);
  }
}
