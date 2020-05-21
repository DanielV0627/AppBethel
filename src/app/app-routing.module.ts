import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './component/company/company.component';
import { ProductComponent } from './component/product/product.component'; 
 
import { CategoryComponent } from './component/category/category.component';


const routes: Routes = [
  {path: 'company', component: CompanyComponent},
  {path: 'product', component: ProductComponent},
  {path: 'Category', component: CategoryComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
