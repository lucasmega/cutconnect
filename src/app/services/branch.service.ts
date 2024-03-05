import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BranchModel } from '../models/branch.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private apiUrl = environment.apiUrl + '/branch'

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Array<BranchModel>> {
    return this.http.get<Array<BranchModel>>(this.apiUrl + '/find-all').pipe();
  }
}
