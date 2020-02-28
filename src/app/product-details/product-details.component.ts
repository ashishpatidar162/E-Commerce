import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  // product property and inject the ActivatedRoute(Interface)
  constructor(
    private route:ActivatedRoute

  ) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
      console.log(param.get('productId'));
      this.product=products[param.get('productId')];
      // console.log(this.route) ;
      console.log(this.product);
    });
  }

}
