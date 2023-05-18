import { Component } from '@angular/core';
import { ProductData } from 'src/shared/product-data';
import { SearchProductsComponent } from 'src/app/search-products/search-products.component'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  productData: any = ProductData;
  productsearch: any;
  searchText: any;
  isNotFound: any;
  constructor(private router: Router) {

  }

  submitSearch() {
    console.log("Hello");
    this.productsearch = this.productData.filter((x: any) => x.name.toLowerCase().includes(this.searchText.toLowerCase()));
    if (this.productsearch.length == 0) {
      this.isNotFound = true;
      this.router.navigate(['/notFound']);
    }

    else {
      this.isNotFound = false;
      this.router.navigate(['/searchProduct']);
    }

    //console.log(this.productsearch);
    // this.router.navigate(['/searchProduct']);
  }
  productPage() {
    if (window.location.href.includes('searchProduct'))
      return true;
    else
      return false
  }

  notFound() {
    return this.isNotFound;
  }
}
