import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BestProductsComponent } from './best-products/best-products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MobilesAndAccessoriesComponent } from './products-List/mobiles-and-accessories/mobiles-and-accessories.component';
import { ClothingComponent } from './products-List/clothing/clothing.component';
import { HomeEssentialsComponent } from './products-List/home-essentials/home-essentials.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BestProductsComponent,
    NavbarComponent,
    MobilesAndAccessoriesComponent,
    ClothingComponent,
    HomeEssentialsComponent,
    SidebarComponent,
    ProductPageComponent,
    SearchProductsComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
