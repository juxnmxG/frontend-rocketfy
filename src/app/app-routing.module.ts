import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { DetailProductComponent } from './components/pages/detail-product/detail-product.component';
import { EditProductComponent } from './components/pages/edit-product/edit-product.component';
import { CreateProductComponent } from './components/pages/create-product/create-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search/:search',
    component: HomeComponent,
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product/create', component: CreateProductComponent },
  { path: 'product/detail/:id', component: DetailProductComponent },
  { path: 'product/edit/:id', component: EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
