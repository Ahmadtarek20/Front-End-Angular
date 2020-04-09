import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../servecies/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categury',
  templateUrl: './categury.component.html',
  styleUrls: ['./categury.component.css']
})
export class CateguryComponent implements OnInit {

  @Input() categuryFromHomeP: any ;
  @Output() categuryChenge = new EventEmitter() ;



  constructor(private productserv: ProductsService , private http : HttpClient,) { }

  ngOnInit() {
    this.getCategurs();
  }
  getCategurs(){
    this.productserv.getCategurys().subscribe(respons =>{
     this.categuryFromHomeP = respons;
     console.log(respons);
    },error =>{
      console.log(error);
    });
  }
  onChange(event) {
    console.log(event.target.value);
    this.categuryChenge.emit(event.target.value);
}
}
