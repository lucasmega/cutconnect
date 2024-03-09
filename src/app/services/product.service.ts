import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { ProductData } from '../models/product-data.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl + '/product'

  constructor(private http: HttpClient) { }

  public findProductByAccount(): Observable<any> {
    return this.http.get<ProductData>(this.apiUrl + '/find-products-by-account').pipe();
  }
}
