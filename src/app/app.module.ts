import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { HttpClientModule  } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[

  {
    path:"",
    component:AdminLoginComponent
  },

  {
    path:"userregistration",
    component:UserRegistrationComponent
  },

  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"add",
    component:ProductAddComponent
  },

  {
    path:"view",
    component:ProductViewComponent
  },

  {
    path:"search",
    component:ProductSearchComponent
  }

  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    ProductAddComponent,
    ProductViewComponent,
    ProductSearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
