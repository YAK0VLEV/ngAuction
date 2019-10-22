import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  { // if the path after the base URL is empty -> render the "HomeComponent" by default
    // (the URL of Auction has nothing after the port number on the local host)
    path: '', component: HomeComponent 
  },                                   
  { // renders ProductDetailComponent if the URL contains the product fragment
    path: 'products/:productId', component: ProductDetailComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
