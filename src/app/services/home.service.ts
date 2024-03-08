import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductWithPrice } from '../models/product-with-price';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = environment.apiUrl + '/product'

  constructor(private http: HttpClient) { }

  public findProductsByEmail(): Observable<ProductWithPrice[]> {
    return this.http.get<ProductWithPrice[]>(this.apiUrl + '/find-products-by-email').pipe();
  }
}
