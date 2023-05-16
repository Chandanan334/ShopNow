import { Component } from '@angular/core';
import { ProductData } from 'src/shared/product-data';
import { SearchProductsComponent } from 'src/app/search-products/search-products.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  productData: any = ProductData;
  productsearch: any;

  submitSearch(val: string) {
    console.warn(val);

    this.productsearch = this.productData.filter((x: any) => x.name.toLowerCase().includes(val.toLowerCase()));

    console.warn(this.productsearch)
  }
  productPage() {
    if (window.location.href.includes('searchProduct'))
      return true;
    else
      return false
  }
}
