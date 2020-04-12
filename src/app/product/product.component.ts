import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../servecies/products.service';
import { AlertifyService } from '../servecies/alertify.service';
import { AuthService } from '../servecies/auth.service';
import { CartServiceService } from '../servecies/cart-service.service';
import { Router } from '@angular/router';
import { Product } from '../Models/Product';
import { Carts } from '../Models/Carts';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Product : Product[];
  add:number = -1;
  cart : Carts;

  constructor(private productserv: ProductsService,  private cs : CartServiceService ,
    private alertfy: AlertifyService ,private as: AuthService , private router : Router) { }

  ngOnInit() {
    this.loadProdects();
  }
  loadProdects(){
    this.productserv.getProducts().subscribe((Product : Product[])=>{
       this.Product = Product;
    },error =>{
      console.log("error")
    });
  }
  addtoCare(index: number){
    if(this.as.loggedIn)this.add = +index;
    else this.router.navigate([' ']); //
   }
  buy(amount: number){
    // debugger;
    let selected = this.Product[this.add]
    let data = {
      ProductId: selected.id,
      UserId: (this.as.decodedToken.nameid),
      Amount: +amount,
    };
    console.log(data);
    this.cs.addtocart(data).subscribe(da =>{
      this.cart = data
      console.log("Done to Add")
    },error =>{
      console.log(error)
    });
  }
}
