import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsDetailsComponent } from './components/contacts-details/contacts-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactsListComponent,
    ContactsDetailsComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
