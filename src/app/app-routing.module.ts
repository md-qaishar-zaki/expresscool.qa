import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component'; 
import { HomeModule } from './home/home.module';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ProjectComponent } from './project/project.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '', component: HomepageComponent }, 
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'contact', component: ContactComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
