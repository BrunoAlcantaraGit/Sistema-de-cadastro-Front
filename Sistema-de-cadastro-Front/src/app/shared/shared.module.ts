import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule} from '@angular/common/http';

//Materila biblioteca externa
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';











@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports:[
    MatToolbarModule,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MatSidenavModule,
    RouterModule,
    MatListModule,
    HomeComponent,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    
  ]

})
export class SharedModule { }
