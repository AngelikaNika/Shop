import { Component, OnInit } from '@angular/core';
import { CatalogServiceService, Product } from '../catalog-service.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public products: Product[];
  public cart: Product[] = [];
  public sum = 0;

  constructor(private catalogService: CatalogServiceService) { }

  ngOnInit(): void {
    this.products = this.catalogService.getProducts();
  }

  public addToCart(product) {
    this.cart.push(product);
    this.countSum();
  }

  public remove(index) {
    console.log("remove", index);
    this.cart.splice(index, 1);
    this.countSum();
  }

  public countSum() {
    this.sum = 0;
    this.cart.forEach(item => {
      this.sum = this.sum + item.price;
    })
  }


}

