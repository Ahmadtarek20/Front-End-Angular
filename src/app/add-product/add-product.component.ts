import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { FormBuilder, NgForm } from '@angular/forms';
import { ProductsService } from '../servecies/products.service';
import { AlertifyService } from '../servecies/alertify.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

 categury = null ;
  model:Product;

  constructor(private productserv: ProductsService , private http : HttpClient,
    private fb: FormBuilder, private aleartfy: AlertifyService ,  private router: Router) {
   }
   selectedfile = null;
  ngOnInit() {
    this.model = { };

  }
  IsSelected(id: any){
    this.categury = id;
  }

  OnFileSelected(event){

   console.log(event);
   this.selectedfile = <File>event.target.files[0];
   console.log(this.selectedfile)
    /*if (event.target.file && event.target.file[0]){
      this.selectedfile = event.target.file[0];
     }*/
  }
  submit(){
    var formData  = new FormData();
    formData.append("Name", this.model.Name);
    formData.append("Price", this.model.Price.toString());
    formData.append("HasDiscount", true.toString());
    formData.append("DiscountAmount", this.model.DiscountAmount.toString());
    formData.append("CategoryId",this.categury);
    formData.append("Photo", this.selectedfile,this.selectedfile.name);

    this.productserv.AddProduct(formData).subscribe(()=>{
      this.router.navigate(['/products']);
   },error =>{
     console.log(error);
    console.log("Eror")
   });

  }
}
