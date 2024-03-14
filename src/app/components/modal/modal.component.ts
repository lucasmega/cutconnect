import { Component, Input, OnInit } from '@angular/core';

import { BranchModel } from '../../models/branch.model';
import { ProfessionalModel } from '../../models/professional.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

  @Input() component!: String;

  constructor() { }

  ngOnInit() {
    // alert(this.component);
   }

  retriveBranch(branch: BranchModel) {
    alert(JSON.stringify(branch));
  }

  retriveProfessional(professional: ProfessionalModel) {
    alert(JSON.stringify(professional));
  }

  retriveProduct(product: any) {
    alert(JSON.stringify(product));
  }

  retriveSchedule(schedule: any) {
    alert(JSON.stringify(schedule));
  }

}

