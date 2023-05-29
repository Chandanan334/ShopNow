import { Component } from '@angular/core';
import { ProductData } from 'src/shared/product-data';
import { SearchProductsComponent } from 'src/app/search-products/search-products.component'
import { ActivatedRoute, Router } from '@angular/router';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

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
  keyword = 'name';
  constructor(private router: Router) {

  }

  submitSearch() {
    console.log("Hello");
    if (this.searchText!=" ")
    this.productsearch = this.productData.filter((x: any) => x.name.toLowerCase().replaceAll(" ","").includes(this.searchText.toLowerCase().replaceAll(" ","")) || 
                                                            x.description.toLowerCase().replaceAll(" ","").includes(this.searchText.toLowerCase().replaceAll(" ","")));
    else
    this.productsearch = this.productData;

    if (this.productsearch.length == 0)
      this.isNotFound = true;
    else 
      this.isNotFound = false;
    

    this.router.navigate(['/searchProduct']);
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
