import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProfessionalModel } from 'src/app/models/professional.model';
import { ProfessionalService } from 'src/app/services/professional.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss'],
})
export class ProfessionalComponent  implements OnInit {

  @Output() event: EventEmitter<ProfessionalModel> = new EventEmitter<ProfessionalModel>();


  public professionals: ProfessionalModel[] = [];

  constructor(private professionalService: ProfessionalService) { }

  ngOnInit() {
    this.professionalService.findAll().subscribe((response: ProfessionalModel[]) => this.professionals = response);
  }

  onClick(professional: ProfessionalModel) {
    this.event.emit(professional);
  }

}
