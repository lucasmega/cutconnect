import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { ProfessionalModel } from '../models/professional.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  private apiUrl = environment.apiUrl + '/professional'

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Array<ProfessionalModel>> {
    return this.http.get<Array<ProfessionalModel>>(this.apiUrl + '/find-all').pipe();
  }
}
