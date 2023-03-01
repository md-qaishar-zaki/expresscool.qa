import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../home.component.scss']
})
export class HomepageComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
