import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-list-product-home',
  templateUrl: './list-product-home.component.html',
  styleUrls: ['./list-product-home.component.css'],
})
export class ListProductHomeComponent implements OnInit {
  p: number = 1;
  listProducts: Product[] = [];
  search: string | null = null;

  constructor(
    private _productService: ProductoService,
    private aRouter: ActivatedRoute
  ) {
    this.search = this.aRouter.snapshot.paramMap.get('search');
  }
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(
      (data) => {
        if (this.search !== null) {
          this.listProducts = data.filter(
            (product: any) =>
              product.name.toLowerCase().includes(this.search) ||
              product.tags.findIndex((tag: any) =>
                tag.toLowerCase().includes(this.search)
              ) !== -1
          );
        } else {
          this.listProducts = data;
        }
      },
      (error) => console.log(error)
    );
  }
}
