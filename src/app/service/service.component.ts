import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['../home/home.component.scss']
})
export class ServiceComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
