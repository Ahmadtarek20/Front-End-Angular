import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from '../servecies/cart-service.service';
import { Product } from '../Models/Product';
import { AlertifyService } from '../servecies/alertify.service';
import { Router } from '@angular/router';
import { AuthService } from '../servecies/auth.service';
import { ProductCard } from '../Models/ProductCard';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css'],
})
export class ProductCartComponent implements OnInit {

  @Input() product: Product;

  constructor(private cs : CartServiceService ,
    private as: AuthService
    , private alertfy: AlertifyService , private router : Router) { }

  ngOnInit() {
  }

}
