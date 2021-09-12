import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() newEmiter = new EventEmitter<string>();

  onSeclect(item: string) {
    this.newEmiter.emit(item);

  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
