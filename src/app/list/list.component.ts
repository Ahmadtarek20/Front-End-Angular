import { Component, OnInit } from '@angular/core';
import { Carts } from '../Models/Carts';
import { Product } from '../Models/Product';
import { CartServiceService } from '../servecies/cart-service.service';
import { AuthService } from '../servecies/auth.service';
import { AlertifyService } from '../servecies/alertify.service';
import { ProductsService } from '../servecies/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cart : Carts [] ;
  listcart : Number[] ;
  valus : any [];


  filteredProducts: Product[];
  _listFilter: string = 'Cart';
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter): this.valus;
  }


  constructor(private cs : CartServiceService ,
    private as: AuthService, private alertfy: AlertifyService ,  private router: Router ,
      private prod: ProductsService )
  {
    this.listcart = [];
    this.valus = [];
    this.filteredProducts =this.valus;
    this.listFilter = ''


  }
  ngOnInit() {
    this.loadCarts();

  }
  loadCarts(){ // yasta hn7otha fe el localstorage keda yabni  we kol lma a7b ast3mlo agebo men el local ahtmm
    const id = localStorage.getItem("id");
    //debugger;
    //(this.as.decodedToken.nameid)
    this.cs.Getcarts(id).subscribe((cart : Carts[]) =>{  //hab3at hena el detocken.namedid
      this.cart = cart;
      //console.log(cart);
      for (let i = 0; i < this.cart.length; i++) {
       // console.log(this.cart[i].productId);
        this.listcart.push(this.cart[i].productId);
       console.log(this.listcart);
      }
      this.cs.GetProductsdetals(this.listcart).subscribe(result =>{
       // console.log(result)             // list of back
        console.log(this.listcart)       // list of ids
       for (let i = 0; i < this.cart.length  ; i++) {
        let back= result.find(x => x.id == cart[i].productId)
       // console.log(back)
         this.valus.push(back)

      }})
     },error =>{
     console.log('eror')
    });

}
cancel(productId ){
  // debugger
  let deletproduct = {productId: productId , userid: (this.as.decodedToken.nameid) };
  console.log(deletproduct);

  this.cs.dropdata(productId).subscribe(result => {
    console.log('Done to Deleted')
    for (let i = 1; i < this.valus.length  ; i++) {

     this.valus.splice(this.valus[productId],1)
     console.log(this.valus)

    }
  }),error =>{
   //this.alertfy.error(error);
  }
}
performFilter(filterBy : string): Product[]{
  filterBy = filterBy.toLocaleLowerCase();
  return this.valus.filter((product:Product)=>
  product.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

pymant(){

}

}
