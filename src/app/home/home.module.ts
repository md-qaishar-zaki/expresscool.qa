import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [  
    AdditionalServicesComponent, HomepageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule
  ],
  exports: [
    AdditionalServicesComponent
  ]
})
export class HomeModule { }
