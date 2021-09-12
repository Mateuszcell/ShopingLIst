import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feautureName = 'recip';

  onNavigate(name: string) {
    this.feautureName = name;
    console.log(name);
  }

  title = 'ShopingLIst';
}
