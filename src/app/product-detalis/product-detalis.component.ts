import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductsService } from '../servecies/products.service';
import { AlertifyService } from '../servecies/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.css']
})
export class ProductDetalisComponent implements OnInit {
  product: Product;

  constructor(private productserv: ProductsService,
    private aleartfy: AlertifyService, private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.loadProduct();
  }
  loadProduct()
  {
    this.productserv.getProduct(+this.route.snapshot.params['id']).subscribe((product:Product)=>{
      this.product=product;
    },error => {
      this.aleartfy.error(error);
    });
  }
  Back(){
    this.router.navigate(['/products']);
  }

}

