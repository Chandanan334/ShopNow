import { Component } from '@angular/core';
import { ProductData } from 'src/shared/product-data';
import { StringData } from 'src/shared/string-data';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  productData = ProductData;
  stringData=StringData;

}
