import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { ProjectComponent } from './project/project.component';
import { ClientsComponent } from './clients/clients.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TestimonialsComponent } from './testimonials/testimonials.component'; 

@NgModule({
  declarations: [
    AppComponent, 
    ContactComponent,
    ServiceComponent,
    ProjectComponent,
    ClientsComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


