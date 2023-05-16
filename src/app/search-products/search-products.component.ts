import { Component, Input } from '@angular/core';
import { ProductData } from 'src/shared/product-data';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent {

  @Input() item :Array <any>=[];

}
