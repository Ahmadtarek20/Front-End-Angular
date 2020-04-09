import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BsDropdownModule, TabsModule } from "ngx-bootstrap";
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CateguryComponent } from './categury/categury.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListComponent } from './list/list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetalisComponent } from './product-detalis/product-detalis.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routs';
import { AuthGardService } from './_guards/auth-gard.service';
import { AlertifyService } from './servecies/alertify.service';
import { AuthService } from './servecies/auth.service';
import { ProductsService } from './servecies/products.service';
import { PrivetCloseService } from './_guards/privet-close.service';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';
import { AdminstrationListofUserComponent } from './adminstration-listof-user/adminstration-listof-user.component';

export function tokenGetter(){
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CateguryComponent,
    ProductComponent,
    RegisterComponent,
    EditUserComponent,
    ListComponent,
    NavBarComponent,
    ProductDetalisComponent,
    ProductCartComponent,
    AddProductComponent,
    AdminstrationComponent,
    AdminstrationListofUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule.forRoot(),
    HttpClientModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:44352'],
        blacklistedRoutes: ['localhost:44352/api/auth']
      }
    }),

  ],
  providers: [
    AuthService,
    AlertifyService,
    AuthGardService,
    ProductsService,
    PrivetCloseService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
