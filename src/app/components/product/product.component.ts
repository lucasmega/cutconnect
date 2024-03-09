import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cost } from 'src/app/models/cost.model';
import { ProductData } from 'src/app/models/product-data.model';
import { PriceService } from 'src/app/services/price.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public prices: Cost[] = [];
  public products: ProductData[] = [];
  public defaultImage = "https://ionicframework.com/docs/img/demos/thumbnail.svg";

  constructor(
    private productService: ProductService,
    private priceService: PriceService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    const price$ = this.priceService.findPriceByAccount().pipe(
      catchError((error) => {
        console.error('Error fetching prices:', error);
        return []; 
      })
    );

    const product$ = this.productService.findProductByAccount().pipe(
      catchError((error) => {
        console.error('Error fetching products:', error);
        return []; 
      })
    );

    forkJoin([price$, product$]).subscribe(
      ([prices, products]) => {
        this.prices = prices;
        this.products = products;
      },
      (error) => {
        console.error('Error in forkJoin:', error);
      }
    );
  }
}
