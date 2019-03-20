import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app-routing.module';
import { AppService } from './Services/app.service';
import { LoginGuard } from './Services/loginGuard.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './Modules/404page/page-not-found-component/page-not-found-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './Modules/Login/login.module';
import { CustomerModule } from './Modules/Customers/customers.module';
import { LoaderService } from '../app/Services/loader.service';

import { MatSidenavModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    // BrowserModule,
    LoginModule,
    AppRouteModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule

  ],
  providers: [ AppService , LoginGuard, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
