import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SearchHomeComponent } from './components/partials/search-home/search-home.component';
import { FormProductComponent } from './components/partials/form-product/form-product.component';
import { ListProductHomeComponent } from './components/partials/list-product-home/list-product-home.component';
import { ListProductDashboardComponent } from './components/partials/list-product-dashboard/list-product-dashboard.component';
import { DetailProductComponent } from './components/pages/detail-product/detail-product.component';
import { CreateProductComponent } from './components/pages/create-product/create-product.component';
import { EditProductComponent } from './components/pages/edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SearchHomeComponent,
    FormProductComponent,
    ListProductHomeComponent,
    ListProductDashboardComponent,
    DetailProductComponent,
    CreateProductComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
