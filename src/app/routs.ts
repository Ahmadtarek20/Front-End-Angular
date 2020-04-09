import { Routes } from '@angular/router';
import { AuthGardService } from './_guards/auth-gard.service';
import { HomeComponent } from './home/home.component';
import { CateguryComponent } from './categury/categury.component';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProductDetalisComponent } from './product-detalis/product-detalis.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';
import { AdminstrationListofUserComponent } from './adminstration-listof-user/adminstration-listof-user.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers:'always',
    canActivate: [AuthGardService],
    children:[
      {path: 'categury', component: CateguryComponent},
      {path: 'list', component: ListComponent},
      {path: 'products', component: ProductComponent},
      {path: 'add-product', component: AddProductComponent},
      {path: 'adminstration', component: AdminstrationComponent},
      {path: 'adminstration-listof-user/:id', component: AdminstrationListofUserComponent},
      {path: 'user/edit', component:EditUserComponent} ,
      {path: 'user/edit/:id', component:EditUserComponent } ,
      {path: 'product-detalis/:id', component:ProductDetalisComponent} ,
      {path: "products" , loadChildren: './product/product-routing.module.ts'}

    ]

  },
  {path: '**', redirectTo:'home', pathMatch: 'full'},
];
