import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UtilComponent } from '../util/util.component';
import { ScheduleService } from 'src/app/services/schedule.service';
import { ScheduleFromBarbershop } from 'src/app/models/schedule-from-barbershop.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent extends UtilComponent implements OnInit {

  public form: FormGroup;
  public hours: String[] = [];
  public selectedTime: String = '';


  constructor(private fb: FormBuilder, private scheduleService: ScheduleService, private alertController: AlertController) {
    super();

    this.form = fb.group({
      date: [null]
    })
  }

  override ngOnInit() { }

  onClick() {
    this.scheduleService.findHourByDateFromBarbershop(new ScheduleFromBarbershop(
      this.formatDate(this.form.get('date')?.value)
    )).subscribe(response => { 
      this.hours = response 
    
    }, error => {
      if (error.error.code == 'BUSINESS_EXCEPTION') {
        this.showAlert('Atenção', error.error.message)
      }
    });
  }

  chooseTime(hour: String) {
    this.selectedTime = hour;
  }


  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


}
