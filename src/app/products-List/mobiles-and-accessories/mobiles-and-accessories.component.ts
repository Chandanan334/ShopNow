import { Component } from '@angular/core';
import { ProductData } from 'src/shared/product-data';
import { StringData } from 'src/shared/string-data';

@Component({
  selector: 'app-mobiles-and-accessories',
  templateUrl: './mobiles-and-accessories.component.html',
  styleUrls: ['./mobiles-and-accessories.component.css']
})
export class MobilesAndAccessoriesComponent {
  productData = ProductData;
  stringData=StringData;
  
}
