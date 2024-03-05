import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BranchModel } from '../../models/branch.model';
import { BranchService } from '../../services/branch.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
})
export class BranchComponent implements OnInit {

  @Output() event: EventEmitter<BranchModel> = new EventEmitter<BranchModel>();

  public branchs: BranchModel[] = [];

  constructor(private brancService: BranchService) {
    this.brancService.findAll().subscribe((response: BranchModel[]) => this.branchs = response);
  }

  ngOnInit() { }

  onClick(branch: BranchModel) {
    this.event.emit(branch);
  }

}
