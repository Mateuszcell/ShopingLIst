import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../recip/recipe.model";

@Component({
  selector: 'app-recip-item',
  templateUrl: './recip-item.component.html',
  styleUrls: ['./recip-item.component.css']
})
export class RecipItemComponent implements OnInit {
  @Input() recip: Recipe;
 @Output() recipSelected = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }
onSelected(){
    this.recipSelected.emit();
}
}
