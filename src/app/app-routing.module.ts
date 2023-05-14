import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MobilesAndAccessoriesComponent} from './products-List/mobiles-and-accessories/mobiles-and-accessories.component';
import {ClothingComponent} from './products-List/clothing/clothing.component';
import {HomeEssentialsComponent} from './products-List/home-essentials/home-essentials.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ProductPageComponent} from './product-page/product-page.component';


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
    path:'productPage',
    component: ProductPageComponent
  },
  //shared URL's
  {
    path:'mobileAndAccessories/productPage',
    component: ProductPageComponent
  },
  {
    path:'clothing/productPage',
    component: ProductPageComponent
  },
  {
    path:'homeEssentials/productPage',
    component: ProductPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
