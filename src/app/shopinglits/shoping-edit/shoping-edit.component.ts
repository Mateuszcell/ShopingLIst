import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingridient} from "../../shared/ingridients.model";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
@ViewChild('nameInput')nameInputRef:ElementRef;
@ViewChild('numberInput')numberInputRed:ElementRef;
@Output() passIngridients= new EventEmitter<Ingridient>()
  addItems(){
const newIngridient= new Ingridient(this.nameInputRef.nativeElement.value
  ,this.numberInputRed.nativeElement.value);
this.passIngridients.emit(newIngridient);
  }
  constructor() { }

  ngOnInit(): void {

  }

}
