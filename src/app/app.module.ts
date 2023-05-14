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
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
