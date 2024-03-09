import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Cost } from '../models/cost.model';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  private apiUrl = environment.apiUrl + '/price'

  constructor(private http: HttpClient) { }

  public findPriceByAccount(): Observable<any> {
    return this.http.get<Cost>(this.apiUrl + '/find-price-by-account').pipe();
  }
}
