import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    { path: 'about', component: AboutComponent }, // Thêm route cho trang About
    { path: '', component:HomeComponent },
  ];
