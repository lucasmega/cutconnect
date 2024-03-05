import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BarbershopModel } from '../models/barbershop.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl + '/user'

  constructor(private http: HttpClient) { }

  public addFavoriteBarbershop(barbershopModel: BarbershopModel): Observable<any> {
    return this.http.post(this.apiUrl + '/add-favorite-barbershop', barbershopModel).pipe();
  }

  public registerUser(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/register').pipe();
  }

}
