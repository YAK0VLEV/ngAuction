import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';

import { ProductService } from './shared/product.service';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Error404Component } from './error404/error404.component'
import { AuctionMaterialModule } from './auction-material/auction-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductDetailComponent,
    SearchComponent,
    StarsComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AuctionMaterialModule,
    AppRoutingModule,
    FormsModule
    //routing // adds the routes configuration to @NgModule()
  ],
  providers: [ // registered providers for dependency injection
    ProductService,
    { // either history API-based navigation (PathLocationStrategy - Angular's default)
      provide: APP_BASE_HREF,
      useValue: '/mypath'
    },
    { // or hash-based navigation (if we want to use # in URL)
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
