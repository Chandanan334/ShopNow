import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/shared/product-data';
import { StringData } from 'src/shared/string-data';


@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent{
  
  productData = ProductData;
  stringData=StringData;


}
