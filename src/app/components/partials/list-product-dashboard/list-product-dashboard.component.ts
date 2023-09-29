import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';
import { Product } from 'src/models/product';
@Component({
  selector: 'app-list-product-dashboard',
  templateUrl: './list-product-dashboard.component.html',
  styleUrls: ['./list-product-dashboard.component.css'],
})
export class ListProductDashboardComponent implements OnInit {
  p: number = 1;
  listProducts: Product[] = [];

  constructor(
    private toastr: ToastrService,
    private _productService: ProductoService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this._productService.getProducts().subscribe(
      (data) => {
        this.listProducts = data;
      },
      (error) => console.log(error)
    );
  }
  deleteProduct(id: any) {
    this._productService.deleteProduct(id).subscribe(() => {
      this.toastr.error('Se ha eliminado con exito', 'Producto Eliminado!');
      this.getProducts();
    });
  }
}
