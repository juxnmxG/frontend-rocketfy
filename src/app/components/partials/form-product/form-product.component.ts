import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/product';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
})
export class FormProductComponent implements OnInit {
  id: string | null = null;
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _serviceProduct: ProductoService,
    private aRouter: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      sku: ['', Validators.required],
      image: ['', Validators.required],
      tags: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.isEdit();
  }

  createProduct() {
    const PRODUCT: Product = {
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      sku: this.productForm.get('sku')?.value,
      image: this.productForm.get('image')?.value,
      tags: this.productForm.get('tags')?.value.split(';'),
      price: this.productForm.get('price')?.value,
      stock: this.productForm.get('stock')?.value,
    };

    if (this.id !== null)
      this._serviceProduct.editProduct(this.id, PRODUCT).subscribe(() => {
        this.toastr.success('Se ha creado el producto', 'Producto registrado!');
        this.router.navigate(['dashboard']);
      });
    else
      this._serviceProduct.createProduct(PRODUCT).subscribe(() => {
        this.toastr.success('Se ha creado el producto', 'Producto registrado!');
        this.router.navigate(['dashboard']);
      });
  }

  isEdit() {
    if (this.id !== null) {
      this._serviceProduct.getProductForId(this.id).subscribe((data) => {
        this.productForm.setValue({
          name: data.name,
          description: data.description,
          sku: data.sku,
          image: data.image,
          tags: data.tags.join(';'),
          price: data.price,
          stock: data.stock,
        });
      });
    }
  }
}
