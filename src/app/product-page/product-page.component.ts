import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/shared/product-data';
import { StringData } from 'src/shared/string-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  constructor(private activeRoute:ActivatedRoute){}
  productData:any = ProductData;
  stringData=StringData;
  //chandana:any=ProductData;
  productDetails:any;
  ngOnInit():void{
    let productId=this.activeRoute.snapshot.paramMap.get('productId');
    this.productDetails=this.productData.filter((x:any) => x.id==productId);
    console.warn(productId);
    console.warn(this.productDetails);
    // productId && this.productData(productId).subscribe((result:any)=>{
    //   console.warn(result)
    // })
    // productId && this.productData;
    // console.warn(this.productData);
  }
 

}
