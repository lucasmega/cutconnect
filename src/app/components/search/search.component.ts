import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AlertController } from '@ionic/angular';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

import { BarbershopModel } from '../../models/barbershop.model';
import { BarbershopService } from '../../services/barbershop.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {

  public form: FormGroup;
  public barbershops: BarbershopModel[] = [];


  constructor(
    private fb: FormBuilder, 
    private barbershopService: BarbershopService, 
    private alertController: AlertController,
    private userService: UserService
    ) { 
    this.form = this.fb.group({
      search: ['']
    });
  }

  ngOnInit() {}

  onSearch() {
    this.form.get('search')?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      filter(typed => typed && typed.length >= 3)
    ).subscribe(typed => this.findByPartialName(typed));
  }

  private findByPartialName(name: String) {
    this.barbershopService.findByPartialName(name).subscribe((response: BarbershopModel[]) => this.barbershops = response);
  }

  public onClick(barbershop: BarbershopModel) {
    const message = 'Você deseja escolher o estabelecimento ' + barbershop.name + ' como seu favorito?';
    this.barbershops.splice(0, this.barbershops.length);
    this.showAlert('Atenção', message, barbershop);
  }

  async showAlert(header: string, message: string, barbershop: BarbershopModel) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.form.reset();
            this.userService.addFavoriteBarbershop(barbershop).subscribe(response => { console.log }, error => { console.error })
          }
        },
        {
          text: 'Não',
          handler: () => {
            this.form.reset();
            this.barbershops.splice(0, this.barbershops.length);
          }
        }
      ]
    });

    await alert.present();
  }

}
