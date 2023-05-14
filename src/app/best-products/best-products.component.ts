import { Component } from '@angular/core';
import { ProductData } from 'src/shared/product-data';

@Component({
  selector: 'app-best-products',
  templateUrl: './best-products.component.html',
  styleUrls: ['./best-products.component.css']
})
export class BestProductsComponent {
  productData = ProductData;

}
