import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeRoutingModule } from './home-routing.module';  


@NgModule({
  declarations: [ 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule
  ],
  exports:[ 
  ]
})
export class HomeModule { }
