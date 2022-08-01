import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProdListComponent } from './components/prod-list/prod-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Routes, RouterModule } from '@angular/router';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { NewProductComponent } from './components/new-product/new-product.component';
// import { NewCategoryComponent } from './components/new-category/new-category.component';

const routes : Routes = [
  {path: '',component:WelcomeComponent},
  {path : 'prod',component : ProdListComponent},
  {path : 'cat',component : CatListComponent},
  {path : 'merchant',component: NewProductComponent},
  // {path : 'newcat',component: NewCategoryComponent}
] ;

@NgModule({
  declarations: [
    AppComponent,
    ProdListComponent,
    WelcomeComponent,
    CatListComponent,
    NewProductComponent,
    // NewCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

