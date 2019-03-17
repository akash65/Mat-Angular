import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app-routing.module';
import { AppService } from './Services/app.service';
import { LoginGuard } from './Services/loginGuard.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './Modules/404page/page-not-found-component/page-not-found-component.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './Modules/Login/login.module';
import { CustomerModule } from './Modules/Customers/customers.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRouteModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [ AppService , LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
