import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerFixed: boolean = true;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
      this.headerFixed = true;
    }
    else{
      this.headerFixed = false;
    }
  }
}
