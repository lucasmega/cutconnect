import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { BarbershopModel } from '../models/barbershop.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BarbershopService {

  private apiUrl = environment.apiUrl + '/barbershop'

  constructor(private http: HttpClient) { }

  public findByPartialName(name: String): Observable<BarbershopModel[]> {
    return this.http.get<BarbershopModel[]>(this.apiUrl + '/find-by-partial-name/' + name);
  }
}
