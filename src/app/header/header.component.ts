import { Component,HostListener } from '@angular/core';
import * as $ from 'jquery';

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
  ngOnInit() {

    // $('.navbar-toggler').toggleClass('mobile-nav-active');

    $('.mobile-nav-toggle').click(function () {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-show').addClass('d-none'); 
      $('.mobile-nav-hide').removeClass('d-none');       
      $('.header').addClass('sticked');  
    })

    $('.mobile-nav-hide').click(function () {
      $('body').removeClass('mobile-nav-active');      
      $('.mobile-nav-hide').addClass('d-none'); 
      $('.mobile-nav-show').removeClass('d-none');  
    }) 

    $('.navbar ul li a').click(function () { 
      $('body').removeClass('mobile-nav-active');    
      $('.mobile-nav-hide').addClass('d-none'); 
      $('.mobile-nav-show').removeClass('d-none');  
    }) 
    
  }
}
