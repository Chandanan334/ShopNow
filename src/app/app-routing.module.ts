import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MobilesAndAccessoriesComponent} from './products-List/mobiles-and-accessories/mobiles-and-accessories.component';
import {ClothingComponent} from './products-List/clothing/clothing.component';
import {HomeEssentialsComponent} from './products-List/home-essentials/home-essentials.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {SearchProductsComponent} from 'src/app/search-products/search-products.component';


const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },
  {
    path:'mobileAndAccessories',
    component: MobilesAndAccessoriesComponent
  },
  {
    path:'clothing',
    component: ClothingComponent
  },
  {
    path:'homeEssentials',
    component: HomeEssentialsComponent
  },
  {
    path:'productPage/:productId',
    component: ProductPageComponent
  },
  {
    path:'searchProduct',
    component: SearchProductsComponent
  },
  //shared URL's
  {
    path:'mobileAndAccessories/productPage/:productId',
    component: ProductPageComponent
  },
  {
    path:'clothing/productPage/:productId',
    component: ProductPageComponent
  },
  {
    path:'homeEssentials/productPage/:productId',
    component: ProductPageComponent
  },
  {
    path:'searchProduct/productPage/:productId',
    component: SearchProductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
