import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {DataTableModule} from "angular-6-datatable";
import { HttpClientModule, HttpClient } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'driver',      component: DriverDashboardComponent },

  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DriverDashboardComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,     
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule ,
    DataTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
