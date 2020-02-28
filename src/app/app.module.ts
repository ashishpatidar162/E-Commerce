import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

//AppModule class with @NgModule decorator
@NgModule({
// expects an array of components, directives and pipes that are part of the module
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductDetailsComponent
  ], 
   //The property imports expects an array of modules.
  imports: [
    BrowserModule, //BrowserModule as an explicit dependency. The BrowserModule is a built-in module that exports basic directives, pipes and services. 
    AppRoutingModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent] //The bootstrap property is where we define the root component of our module
})
export class AppModule { }
