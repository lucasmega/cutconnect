import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ScheduleFromBarbershop } from '../models/schedule-from-barbershop.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private apiUrl = environment.apiUrl + '/schedule'

  constructor(private http: HttpClient) { }

  public findHourByDateFromBarbershop(object: ScheduleFromBarbershop): Observable<String[]> {
    return this.http.post<String[]>(this.apiUrl + '/find-hour-by-date-from-barbershop', object).pipe();
  }
}
