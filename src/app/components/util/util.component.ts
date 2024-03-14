import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.scss'],
})
export class UtilComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  public formatCurrency(value: number): string {
    const valueInBrazilianReal = value / 100;

    const formattedValue = valueInBrazilianReal.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    return formattedValue;
  }

  public formatDate(value: string) {

    const date = new Date(value);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

}
