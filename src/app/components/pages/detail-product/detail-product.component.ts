import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit {
  id: string | null;
  product: Product = {
    name: "",
    sku: "",
    description: "",
    stock: 0,
    price: 0,
    tags: [""],
    image: ""
  };

  constructor(
    private aRouter: ActivatedRoute,
    private _productService: ProductoService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this._productService.getProductForId(this.id).subscribe((data) => {
      this.product = data;
    });
  }

  deleteProduct(id: any) {
    this._productService.deleteProduct(id).subscribe(() => {
      this.toastr.error('Se ha eliminado con exito', 'Producto Eliminado!');
      this.router.navigate(['']);
    });
  }
}
