import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  url = 'http://localhost:4000/api/product/';

  constructor(private http: HttpClient) {}

  getProducts = (): Observable<any> => {
    return this.http.get(this.url + 'ALL');
  };

  getProductForId = (id: any): Observable<any> => {
    return this.http.get(this.url + id);
  };

  createProduct = (product: Product): Observable<any> => {
    return this.http.post(this.url + 'create', product);
  };

  editProduct = (id: any, product: Product): Observable<any> => {
    return this.http.put(this.url + 'edit/' + id, product);
  };
  deleteProduct(id: any): Observable<any> {
    return this.http.delete(this.url + 'delete/' + id);
  }
}
