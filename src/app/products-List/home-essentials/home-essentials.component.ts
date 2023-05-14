import { Component } from '@angular/core';
import { ProductData } from 'src/shared/product-data';
import { StringData } from 'src/shared/string-data';

@Component({
  selector: 'app-home-essentials',
  templateUrl: './home-essentials.component.html',
  styleUrls: ['./home-essentials.component.css']
})
export class HomeEssentialsComponent {
  productData = ProductData;
  stringData=StringData;

}
